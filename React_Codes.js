Hooks: - 
const [variable,updateVar] = useState("initial");

useEffect(() =>{
	code:--

}) -- component did mount


useEffect(() =>{
	code:--

},[]) - component did update --once while loading 

useEffect(() =>{

},[var]) - 


useEffect(() => {
  // Inside this callback function we perform our side effects.
}, [dependency]);


calling api: - 

const getDetails = fetch(url)
										.then((response)=>{
											if (response.ok) return response.json();
											else throw new error("error");
										}
										.then(data => setData(data));
										.catch(error)=> setError(error.msg);

										) 

Thunk - middle ware
--------
redux library is capable of handling only sync action dispatch and state change. But wen we need to handle async calls like api calls then it will need some middle ware to handle things. for normal action dispatc we dispatch action and then it will call the reducer function and it will change the state. but here since dispatch will call te function where inside there will be api call and then it will wait for the result and then it will dispatch action once we have got the api result. this is the use of thunk.
export async function fetchTodos(dispatch, getState) {
  const response = await client.get('/fakeApi/todos')
  dispatch({ type: 'todos/todosLoaded', payload: response.todos })
}
-------------