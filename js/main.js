// Le Méditerranéen — copie du numéro de téléphone au clic
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
    t.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#2A1E16;color:#FBF4E6;padding:13px 22px;border-radius:4px;font-family:Karla,sans-serif;font-size:14px;font-weight:600;z-index:999;box-shadow:0 10px 30px rgba(0,0,0,.35);opacity:0;transition:opacity .2s;pointer-events:none;';
    document.body.appendChild(t);
  }
  t.textContent = text;
  t.style.opacity = '1';
  clearTimeout(t._timer);
  t._timer = setTimeout(function(){ t.style.opacity = '0'; }, 2600);
}
