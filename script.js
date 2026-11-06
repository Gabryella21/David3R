const menuToggle=document.getElementById('menuToggle');
const nav=document.getElementById('nav');
menuToggle.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

// Upload demonstrativo: mostra o nome do arquivo, sem enviar para servidor.
document.getElementById('fileInput').addEventListener('change',e=>{
  const file=e.target.files[0];
  document.getElementById('fileStatus').textContent=file?`Selecionado: ${file.name} (${(file.size/1024).toFixed(1)} KB)`:'Nenhum arquivo selecionado';
});

// Correção demonstrativa da questão.
document.getElementById('quizForm').addEventListener('submit',e=>{
  e.preventDefault();
  const selected=document.querySelector('input[name="answer"]:checked');
  const result=document.getElementById('quizResult');
  if(!selected){result.textContent='Selecione uma alternativa antes de corrigir.';result.style.color='#b7791f';return;}
  if(selected.value==='b'){
    result.textContent='✓ Resposta correta! A biblioteca digital organiza e facilita o acesso aos materiais de estudo.';
    result.style.color='#43864d';
  }else{
    result.textContent='Ainda não! Tente novamente. Pense no papel de reunir e disponibilizar conteúdos.';
    result.style.color='#b65a5a';
  }
});

// Agenda demonstrativa: dados ficam apenas no navegador enquanto a página está aberta.
const eventForm=document.getElementById('eventForm');
const eventList=document.getElementById('eventList');
const events=[];
const dateInput=document.getElementById('eventDate');
const today=new Date(); dateInput.min=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().slice(0,10);
eventForm.addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('eventName').value.trim();
  const date=dateInput.value, time=document.getElementById('eventTime').value;
  if(!name||!date||!time)return;
  const event={id:Date.now(),name,date,time,type:document.getElementById('eventType').value,alert:document.getElementById('eventAlert').checked};
  events.push(event); events.sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time));
  renderEvents(); eventForm.reset(); document.getElementById('eventAlert').checked=true;
  document.getElementById('eventFeedback').textContent=event.alert?'Atividade adicionada. O lembrete será solicitado quando chegar o horário, se esta página estiver aberta.':'Atividade adicionada à agenda.';
  if(event.alert && 'Notification' in window && Notification.permission==='default') Notification.requestPermission();
});
function renderEvents(){
  document.getElementById('eventCount').textContent=`${events.length} EVENTO${events.length===1?'':'S'}`;
  if(!events.length){eventList.innerHTML='<div class="empty-state">Sua agenda está livre.<br><small>Adicione uma atividade para começar.</small></div>';return;}
  eventList.innerHTML='';
  events.forEach(ev=>{
    const d=new Date(ev.date+'T12:00:00');
    const item=document.createElement('div');item.className='event-item';
    const date=document.createElement('div');date.className='event-date';
    date.innerHTML=`${String(d.getDate()).padStart(2,'0')}<small>${d.toLocaleDateString('pt-BR',{month:'short'}).replace('.','').toUpperCase()}</small>`;
    const info=document.createElement('div');info.className='event-info';
    const title=document.createElement('b');title.textContent=ev.name;
    const detail=document.createElement('small');detail.textContent=`${ev.type} • ${ev.time}${ev.alert?' • lembrete ativado':''}`;
    info.append(title,detail);
    const del=document.createElement('button');del.className='delete-event';del.type='button';del.textContent='×';del.setAttribute('aria-label','Excluir atividade');
    del.addEventListener('click',()=>{const i=events.findIndex(x=>x.id===ev.id);if(i>-1)events.splice(i,1);renderEvents();});
    item.append(date,info,del);eventList.append(item);
  });
}
