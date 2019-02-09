function _curryr(fn){

    return function(a,b){         // 1.
        return arguments.length == 2 ? fn(a,b) : function(b){ return fn(b,a)};
    }
}

var _get = _curryr(function(obj, key){
    return obj == null ? undefined : obj[key];
});

function _filter(users, predi) {       // 응용형 함수, 고차함수(함수를 인자로 받거나 함수를 리턴하거나)
    var new_list = [];

    // _each(list, function(val){

    // });

    for(var i = 0; i < users.length; i++){
        if(predi(users[i])){
            new_list.push(users[i])
        }
    }
    return new_list;
}

function _map(list, mapper){
    var new_list = [];
    _each(list, function(val){
        new_list.push(mapper(val));
    });

    return new_list;
}

var users = [
    {id:1, name: 'ID', age: 45},
    {id:2, name: 'BF', age: 32},
    {id:3, name: 'DG', age: 46},
    {id:4, name: 'AS', age: 42},
    {id:5, name: 'EF', age: 24},
    {id:6, name: 'IE', age: 36},
    {id:7, name: 'SR', age: 65},
    {id:8, name: 'AC', age: 41},
    {id:9, name: 'XX', age: 12}
];

function _is_object(obj){
    return typeof obj == 'object' && !!obj;
}

function _keys(obj){
    return _is_object(obj) ? Object.keys(obj) : [];
}


var _length = _get('length');

function _each(list, iter){     // list: array, iter: function
    var keys = _keys(list);

    for(var i = 0, len = keys.length; i < len; i++){
        iter(list[keys[i]]);
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

// curryr이 적용된 맵과 filter
var _map = _curryr(_map),
 _filter = _curryr(_filter);

 
 function _pipe(){
    var fns = arguments;
    return function(arg){
        return _reduce(fns, function(arg,fn){
            return fn(arg);
        }, arg);
    }
}

 function _go(arg){
    var fns = _rest(arguments); // array like object
                                // 인자 값중 앞에 1을 제외한 나머지 함수 사용
    return _pipe.apply(null, fns)(arg);
}

            
var _values = _map(_identity);

function _identity(val){
    return val;
}