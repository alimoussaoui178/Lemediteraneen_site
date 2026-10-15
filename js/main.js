// Le Méditerranéen — copie du numéro au clic + onglets de la carte
function copyPhone(e, number){
  try{
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(number).then(function(){
        showPhoneToast('Numéro copié : ' + number);
      }).catch(function(){
        showPhoneToast('Numéro : ' + number);
      });
    } else {
      showPhoneToast('Numéro : ' + number);
    }
  }catch(err){
    showPhoneToast('Numéro : ' + number);
  }
}
function showPhoneToast(text){
  var t = document.getElementById('phoneToast');
  if(!t){
    t = document.createElement('div');
    t.id = 'phoneToast';
    t.style.cssText = 'position:fixed;left:50%;bottom:84px;transform:translateX(-50%);background:#3A1019;color:#FBF4E6;padding:13px 22px;border-radius:4px;font-family:Syne,sans-serif;font-size:14px;font-weight:600;z-index:999;box-shadow:0 10px 30px rgba(0,0,0,.35);opacity:0;transition:opacity .2s;pointer-events:none;';
    document.body.appendChild(t);
  }
  t.textContent = text;
  t.style.opacity = '1';
  clearTimeout(t._timer);
  t._timer = setTimeout(function(){ t.style.opacity = '0'; }, 2600);
}

// Onglets de la carte (sans JS, toutes les catégories restent visibles)
(function(){
  var tabs = document.querySelectorAll('.tab');
  if(!tabs.length) return;
  function select(tab){
    tabs.forEach(function(t){
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function(t, i){
    t.addEventListener('click', function(){ select(t); });
    t.addEventListener('keydown', function(e){
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if(!d) return;
      var next = tabs[(i + d + tabs.length) % tabs.length];
      select(next); next.focus();
    });
  });
  select(tabs[0]);
})();
