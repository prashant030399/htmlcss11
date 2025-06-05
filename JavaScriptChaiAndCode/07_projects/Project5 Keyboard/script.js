const insert = document.querySelector('#insert');

//for selectiing keyboard write window

window.addEventListener('keydown',(e) => {
    insert.innerHTML = `
    <div class="keyboard">


<table border ='1'>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space':e.key}</td>  
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>

    </div>
    
    `
})