document.addEventListener('DOMContentLoaded', function() {
    
    const menuItems = document.querySelectorAll('.item-submenu > a');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            const submenu = this.nextElementSibling;
            const parentLi = this.parentElement;

            document.querySelectorAll('.item-submenu.aberto').forEach(openItem => {
                if(openItem !== parentLi) {
                    openItem.classList.remove('aberto');
                    openItem.querySelector('.sub-menu').style.maxHeight = '0px';
                }
            });

            if (parentLi.classList.contains('aberto')) {
                parentLi.classList.remove('aberto');
                submenu.style.maxHeight = '0px';
            } else {
                parentLi.classList.add('aberto');
                submenu.style.maxHeight = submenu.scrollHeight + 'px';
            }
        });
    });

    const executarBtn = document.getElementById('executarBtn');
    const codigoInput = document.getElementById('codigoInput');

    if (executarBtn && codigoInput) {
        executarBtn.addEventListener('click', function() {
            const codigo = codigoInput.value;
            const mesmaJanela = window.open('', '_self');
            mesmaJanela.document.open();
            mesmaJanela.document.write(codigo);
            mesmaJanela.document.close();
        });
    }
});
