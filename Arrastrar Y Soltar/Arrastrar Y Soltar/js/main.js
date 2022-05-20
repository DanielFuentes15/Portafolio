const lista=document.getElementById('contratistas');

Sortable.create(lista,{
    animation: 150,
    chosenClass: "pulsado",
    ghostClass:"phantom",
    dragClass:"arrastrar",
    onEnd:() => {
        console.log('Elemento Insertado');
    }
});