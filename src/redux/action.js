import axios from "axios";


export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

export const POST_DATA_REQUEST = "POST_DATA_REQUEST";
export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS";
export const POST_DATA_FAILURE = "POST_DATA_FAILURE";


const getDataRequest = ()=>{
    return({
        type:GET_DATA_REQUEST
    })
}

const getDataSuccess = (data)=>{
    return({
        type:GET_DATA_SUCCESS,
        payload:data
    })
}

const getDataFailure = ()=>{
    return({
        type:GET_DATA_FAILURE
    })
}

const postDataRequest = ()=>{
    return({
        type:POST_DATA_REQUEST
    })
}

const postDataSuccess = ()=>{
    return({
        type:POST_DATA_SUCCESS
    })
}

const postDataFailure = ()=>{
    return({
        type:POST_DATA_FAILURE
    })
}


export const getData = ()=>(dispatch)=>{
    dispatch(getDataRequest())
  axios({
    method:"GET",
    url:"https://cridentials.herokuapp.com/cridentials"
  })
  .then((res)=>{
    dispatch(getDataSuccess(res.data))
  })
  .then((error)=>{
    dispatch(getDataFailure())
  })
}

export const postData = (data)=>(dispatch)=>{
    dispatch(postDataRequest())
  axios({
    method:"POST",
    url:"https://cridentials.herokuapp.com/cridentials",
    data
  })
  .then((res)=>{
    dispatch(postDataSuccess())
  })
  .then((error)=>{
    dispatch(postDataFailure())
  })
}