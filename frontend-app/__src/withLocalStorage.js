

const withLocalStorage = (key, WrappedComponent) => {
   function withLocalStorage(props) {

      const save = (data) => {
         localStorage.setItem(key, data);
      }

      const load = () => {
         return localStorage.getItem(key);
      }


      return <WrappedComponent save={save} load={load} {...props} />
   }
   return withLocalStorage;
}

export default withLocalStorage;