 // 2. _filter, _map으로 리팩토링
 function _filter(users, predi) {       // 응용형 함수, 고차함수(함수를 인자로 받거나 함수를 리턴하거나)
    var new_list = [];

    _each(list, function(val){
        if(predi(val)){new_list.push(val);}
    });

    // for(var i = 0; i < users.length; i++){
    //     if(predi(users[i])){
    //         new_list.push(users[i])
    //     }
    // }
    return new_list;
}

function _map(list, mapper){
    var new_list = [];
    _each(list, function(val){      // 코드의 간결성
        new_list.push(mapper(list[i]));
    });
    // for(var i = 0; i < list.length; i++){
    //     new_list.push(mapper(list[i]));
    // }
    return new_list;
}

function _each(list, iter){     // list: array, iter: function
    for(var i = 0; i < list.length; i++){
        iter(list[i]);
    }

    return list
}

function _add(a, b){
    return a + b;
}

function _reduce(list, iter,  memo){
    if ( arguments.length == 2){
        memo = list[0];
        list = list.slice(1);
    }
    _each(list, function(val){
        memo = iter(memo, val);
    });
    return memo;
}

var slice = Array.prototype.slice;
function _rest(list,num){
    return slice.call(list, num || 1);
}