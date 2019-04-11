export function assert(exp, msg) {
    let li = document.createElement('li');
    let cls = exp ? 'success': 'fail';
    li.classList.add(cls);
    li.classList.add('assert-item');
    li.innerHTML = msg;
    document.getElementById('assert').appendChild(li);
}