$('#button').click(function(){
    if($('#feminino').is(':checked')){
      alert("Você escolheu feminino");
    }else if($('#masculino').is(':checked')){
      alert('Você escolheu masculino');
    }else if($('#outro').is(':checked')){
      alert('Você escolheu outro');
    }else{
        alert('você não escolheu.')
    }
  });