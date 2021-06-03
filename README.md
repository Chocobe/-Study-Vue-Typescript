# Vue & Typescript

``JS`` 기반의 Vue 프로젝트를 ``TS`` 기반으로 변경하는 방법에 대한 정리 입니다.

## 00. ``TS`` 프로젝트 준비

기존의 ``JS`` 프로젝트에 ``TS``를 설치하는 방법은 점진적인 이주가 힘듭니다.

``TS`` 라이브러리 설치와 설정이 되는 순간, 타입이 없는 ``JS`` 코드들에서 에러가 발생하기 때문입니다.

때문에, ``JS`` 프로젝트를 ``TS``로 점진적인 변환을 하기 위해, 새로운 ``TS`` 프로젝트를 만들는 방법을 추천 합니다.

<br/>

새로운 ``TS``기반 ``Vue`` 프로젝트를 생성하고,

기존 프로젝트의 관련 소스 (JS파일)을 복사해 옵니다.

그리고 ``tsconfig.json`` 에서 다음 설정을 변경해 줍니다.

* ``strict: false``
* ``noImplicitAny: false``
* ``aloorwJs: true``

소스코드 이동과 위 설정이 완료 되었다면, 로컬서버 실행과 Build가 정상동작 할 것입니다.



<br/><hr/><br/>



## 01. ``Promise<AxiosResponse<T>>``

``Axios`` 라이브러리의 API 요청 반환타입 입니다.

``Promise`` 타입을 사용한 원본 타입은 ``Promise<AxiosResponse<T>>`` 이지만, ``Axios`` 라이브러리에서 좀 더 간단한 타입을 제공 합니다.

```typescript
interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {}
```

아래 코드는 ``AxiosPromise<T>`` 사용 예시 입니다.

```typescript
function apiGet_NewsItems(): AxiosPromise<NewsItem> {
  //
}
```



<br/><hr/><br/>



## 02. Vue 컴포넌트의 ``props`` 타입정의

Vue 컴포넌트의 ``props`` 속성은 다음 객체를 가집니다.

```javascript
import Vue from "vue";

export default Vue.extend({
  props: {
    propName: {
      type?: String,
      required?: Boolean,
      default?: any,
    },
  },
});
```

``props.type``에 실제 타입을 정의해야 하는데, 여기에는 ``객체`` 또는 ``리터럴 생서자``만 사용할 수 있습니다.

때문에, ``Type Assertion (타입 단언)``으로 구체적인 타입을 지정할 수 있습니다.

<br/>

``리터럴 생성자`` 타입을 지정할 경우는 다음과 같습니다.

```typescript
import Vue from "vue";

export default Vue.extend({
  props: {
    userName: {
      type: String,
    },
    
    age: {
      type: Number,
    },

    isActive: {
      type: Boolean,
    }
  },
});
```

<br/>

``객체`` 타입을 지정할 경우는 ``PropType``의 ``제네릭``으로 지정할 수 있으며, 다음과 같습니다.

```typescript
import Vue, { PropType } from "vue";

export default Vue.extend({
  props: {
    user: {
      type: Object as PropType<User>,
    },

    userList: {
      type: Array as PropType<User[]>,
    },
  },
});
```



<br/><hr/><br/>



## 03. ``computed`` 의 ``반환 타입``

Vue 컴포넌트의 ``computed`` 속성은 ``Typescript 컴파일러``의 타입추론이 어렵기 때문에 ``반환 타입``을 ``명시적``으로 작성해야 합니다.

```typescript
import Vue from "vue";

export default Vue.extend({
  computed: {
    today(): string {
      return new Date().toString();
    },
  },
});
```
