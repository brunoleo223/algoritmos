function validParentheses(parens){
    let stack = [];
    for(let i = 0; i < parens.length; i++){
        if(parens[i] === '(' || parens[i] === '{' || parens[i] === '['){
            stack.push(parens[i]);
        }else{
            if(stack.length === 0){
                return false;
            }
            let last = stack.pop();
            if(parens[i] === ')' && last !== '('){
                return false;
            }
            if(parens[i] === '}' && last !== '{'){
                return false;
            }
            if(parens[i] === ']' && last !== '['){
                return false;
            }
        }
    }
    return stack.length === 0;
}