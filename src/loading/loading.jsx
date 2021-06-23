import './loading.scss';
const Loading = (props)=>{
    console.log(props,'props');
    console.log(props.loading,'loading');
        return props.loading?props.children : null
        
}

export default Loading;