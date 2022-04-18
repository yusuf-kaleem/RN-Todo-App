
function add_task(paylod){
    return {
        type : "ADD_TASK",
        payload : paylod
    }
}

function remove_task(paylod){
    return {
        type : "REMOVE_TASK",
        payload : paylod
    }
}

export {add_task,remove_task}
