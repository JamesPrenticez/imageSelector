// https://www.hongkiat.com/blog/create-auto-generated-table-of-contents-html-slot/
// https://github.com/hongkiat/html-slot-toc/blob/master/script.js

export function tableOfContentsX (){
    if('name' in document.createElement('slot') && 'attachShadow' in document.createElement('p')) {
        let templateContent = document.querySelector('template').content;
        let article = document.querySelector('article').cloneNode(true);
        article.querySelectorAll('*[id]').forEach((ele)=>{ele.removeAttribute('id')})
        article.attachShadow({  mode: 'closed' }).appendChild(templateContent.cloneNode(true));
        document.querySelector('#toc').appendChild(article);
        console.log(article)
        console.log(templateContent)
    }
    else{
        let strong = document.createElement('strong');
        strong.textContent = '⚠️ HTML Slot or Shadow DOM is not supported in your browser. Please try the demo in another browser.';
        strong.style['color'] = 'red';
        document.body.insertBefore(strong, document.querySelector('h1'))
    }
}