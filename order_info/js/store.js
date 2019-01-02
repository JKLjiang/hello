const store_key="goods_info"
export default {
    save(items){
      window.localStorage.setItem(store_key,JSON.stringify(items))
    },
    fetch(){
      return JSON.parse(window.localStorage.getItem(store_key)||'[]')
    }
}
