// marquee
(function(){
  var items=["LINUX","HARDENING","SSH","UFW","FAIL2BAN","WAZUH","NMAP","PENTESTING","SQL INJECTION","REDES","SMR","ASIR"];
  var half=items.map(function(t){return "<span>"+t+" <span style='color:var(--amber)'>//</span></span>"}).join("");
  document.getElementById("marquee").innerHTML=half+half;
})();
// typewriter
(function(){
  var snips=[{c:"whoami",o:"sebastian.cristea — sysadmin & security"},{c:"sudo ufw status",o:"Status: active"},{c:"fail2ban-client status sshd",o:"sshd · currently banned: 42"},{c:"nmap -sV homelab.local",o:"22/tcp open ssh · hardened"}];
  var i=0,j=0,cmd=document.getElementById("tw-cmd"),out=document.getElementById("tw-out");
  function tick(){
    var s=snips[i];
    if(j<s.c.length){cmd.textContent=s.c.slice(0,++j);out.textContent="";setTimeout(tick,55);}
    else{out.textContent=s.o;setTimeout(function(){i=(i+1)%snips.length;j=0;tick();},2200);}
  }
  tick();
})();
