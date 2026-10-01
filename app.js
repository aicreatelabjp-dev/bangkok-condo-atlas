(() => {
  const entries = window.CONDOS;
  const checked = '2026-10-01';
  const copy = {
    th: { edition:'ฉบับตรวจสอบ · กันยายน 2026', eyebrow:'แผนที่เปรียบเทียบคอนโดมิเนียม', headline:'เลือกบ้านจากเมืองที่เป็นจริง', lead:'10 อาคาร · 10 ห้องที่ระบุชัด · แยกข้อมูลโครงการออกจากข้อมูลห้อง เพื่อเปรียบเทียบอย่างตรงไปตรงมา', stat:'โครงการในแผนที่', mapOver:'01 / LOCATION', mapHeading:'ตำแหน่งอาคาร', fit:'ดูทั้งหมด', mapUnavailable:'ไม่สามารถโหลดแผนที่ได้ โปรดดูรายการห้องและภาพรวมตำแหน่ง', mapNote:'หมุดแสดงตำแหน่งอาคาร ไม่ใช่สถานี ระยะทางอ้างอิงจากประกาศ ไม่ใช่ระยะเส้นตรงหรือเวลาเดิน', listOver:'02 / COMPARE', listHeading:'เปรียบเทียบห้อง', sort:'เรียงตาม', number:'หมายเลข', distance:'ระยะจากสถานี', year:'ปีสร้างล่าสุด', area:'พื้นที่มากที่สุด', property:'อาคาร / ห้อง', transit:'สถานี / ระยะตามประกาศ', yearHead:'ปี / อายุโดยประมาณ', areaHead:'พื้นที่ / ชั้น', facilities:'สระ · ซาวน่า · ทำงาน', unknown:'ยังไม่ยืนยัน', conflict:'ข้อมูลขัดแย้ง', yes:'มี', no:'ไม่มี', age:'ปี', floor:'ชั้น', pool:'สระว่ายน้ำ', sauna:'ซาวน่า', cowork:'โคเวิร์กกิ้ง', bath:'ออนเซ็น / อ่างรวม', details:'ข้อมูลเพิ่มเติม', unit:'ห้องที่ระบุ', building:'ข้อมูลอาคาร', photos:'ภาพถ่าย', photoHint:'เปิดหน้าประกาศแล้วกด Show all photos', photoUnavailable:'หน้าประกาศนี้ไม่แสดงปุ่ม Show all photos ในการตรวจสอบ', sources:'แหล่งข้อมูล', coordinate:'ตำแหน่งบนแผนที่', caveat:'พิกัดจากฐานข้อมูลภายนอก; ควรยืนยันตำแหน่งอาคารซ้ำก่อนตัดสินใจ', yearConflict:'แหล่งอื่นระบุ', checked:'ตรวจสอบข้อมูล:', footer:'ข้อมูลประกาศและสิ่งอำนวยความสะดวกอาจเปลี่ยนแปลง โปรดตรวจสอบกับผู้ขายและนิติบุคคลก่อนตัดสินใจ; “ยังไม่ยืนยัน” ไม่ได้หมายถึง “ไม่มี”', selected:'เลือกอาคารบนแผนที่หรือตารางเพื่อดูรายละเอียด', dataWarning:'ข้อมูลจากลิงก์ที่ระบุและชุดข้อมูลเริ่มต้นของผู้ใช้; พิกัดอาคารอ้างอิงแหล่งแผนที่แยกต่างหาก' },
    ja: { edition:'2026年9月 確認版', eyebrow:'バンコクのコンドミニアム比較地図', headline:'街から、住まいを選ぶ。', lead:'10建物・指定の10部屋。建物情報と部屋情報を分け、出典と未確認事項を明示します。', stat:'地図上の物件', mapOver:'01 / LOCATION', mapHeading:'建物の位置', fit:'全件表示', mapUnavailable:'地図を読み込めません。物件一覧と位置の全体図をご覧ください。', mapNote:'ピンは駅ではなく建物の位置です。駅距離は掲載元の数値で、直線距離や徒歩時間ではありません。', listOver:'02 / COMPARE', listHeading:'部屋を比較', sort:'並び替え', number:'番号順', distance:'駅距離順', year:'築浅順', area:'面積が広い順', property:'建物 / 部屋', transit:'駅 / 掲載距離', yearHead:'完成年 / 築約', areaHead:'面積 / 階', facilities:'プール · サウナ · コワーク', unknown:'未確認', conflict:'資料間で不一致', yes:'あり', no:'なし', age:'年', floor:'階', pool:'プール', sauna:'サウナ', cowork:'コワーク', bath:'共用浴場 / onsen', details:'詳細', unit:'指定の部屋', building:'建物の情報', photos:'写真', photoHint:'掲載ページで Show all photos を押してください', photoUnavailable:'確認時、この部屋ページに Show all photos ボタンは表示されませんでした', sources:'出典', coordinate:'ピン座標', caveat:'外部データベースの座標。意思決定前に建物位置を再確認してください', yearConflict:'別資料の記載', checked:'確認日:', footer:'掲載内容や設備の利用状況は変わり得ます。契約前に掲載元・管理組合へご確認ください。「未確認」は「なし」ではありません。', selected:'地図または表から物件を選ぶと詳細を表示します。', dataWarning:'指定された初期データと掲載元に基づく比較。建物座標は別の地図資料を参照。' }
  };
  const priceCopy = {
    th: { propertyPrice:'อาคาร / ค่าเช่าต่อเดือน', month:' / เดือน', priceNote:'ค่าเช่าตามประกาศ ณ 2026-10-01 อาจเปลี่ยนแปลง โปรดตรวจสอบกับแหล่งประกาศ' },
    ja: { propertyPrice:'建物 / 月額賃料', month:' / 月', priceNote:'賃料は2026-10-01時点の掲載価格です。最新価格は掲載元でご確認ください。' }
  };
  let language = 'th';
  let selected = 1;
  let sort = 'number';
  const voteKey = 'bangkok-condo-votes-v1';
  const visitorKey = 'bangkok-condo-visitor-v1';
  const migratedKey = 'bangkok-condo-votes-server-migrated-v1';
  const voteApi = 'https://gemini-proxy.den.to/condo-votes/v1';
  let votes = {};
  try { votes = JSON.parse(window.localStorage?.getItem(voteKey) || '{}') || {}; } catch (_) { votes = {}; }
  let visitorId;
  try {
    visitorId = window.localStorage?.getItem(visitorKey);
    if (!visitorId) {
      const bytes = new Uint8Array(16);
      window.crypto.getRandomValues(bytes);
      bytes[6] = (bytes[6] & 0x0f) | 0x40;
      bytes[8] = (bytes[8] & 0x3f) | 0x80;
      const hex = Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('');
      visitorId = `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
      window.localStorage?.setItem(visitorKey, visitorId);
    }
  } catch (_) { visitorId = null; }
  const pendingVotes = new Set();
  let migrationPromise = Promise.resolve();
  let map;
  const markers = new Map();
  const $ = id => document.getElementById(id);
  const t = key => key === 'unknown' ? 'ー' : priceCopy[language][key] || copy[language][key];
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const value = state => {
    const special = {
      'yes-unverified': language === 'th' ? 'มี (ยังไม่ยืนยันการเปิดใช้)' : 'あり（稼働未確認）',
      reported: language === 'th' ? 'หลายแหล่งระบุ (ควรตรวจสอบ)' : '複数資料に記載（現地確認）'
    };
    return `<span class="status ${state}">${special[state] || t(state)}</span>`;
  };
  const num = n => Number(n).toLocaleString(language === 'th' ? 'th-TH' : 'ja-JP');
  const rent = amount => `฿${num(amount)}${t('month')}`;
  const occupancyNote = entry => {
    const until = entry.unit.availableFrom;
    if (!until) return '';
    if (entry.id === 11) return language === 'th'
      ? `ประกาศขาย: มีผู้เช่าถึง ${until} · วันเช่าได้ยังไม่ยืนยัน`
      : `売買掲載: ${until}まで入居者あり・賃貸可能時期は未確認`;
    return language === 'th'
      ? `ประกาศระบุว่ามีผู้เช่าถึง ${until} · วันเข้าอยู่ถัดไปยังไม่ยืนยัน`
      : `掲載上は${until}まで賃貸中・次の入居可能日は未確認`;
  };
  const age = year => `${num(year)} / ${t('age')} ${num(new Date().getFullYear()-year)}`;
  function voteSummary() {
    const likes = entries.filter(e => votes[e.id] === 'like').length;
    const dislikes = entries.filter(e => votes[e.id] === 'dislike').length;
    $('vote-summary').textContent = language === 'th'
      ? `คะแนนของฉัน: ชอบ ${likes} · ไม่ชอบ ${dislikes} · ยังไม่เลือก ${entries.length - likes - dislikes}`
      : `自分の評価: 好き ${likes} · 嫌い ${dislikes} · 未選択 ${entries.length - likes - dislikes}`;
  }
  function voteControls(id) {
    const labels = language === 'th' ? ['ชอบ', 'ไม่ชอบ'] : ['好き', '嫌い'];
    return `<div class="vote-controls"><button type="button" class="vote-button ${votes[id] === 'like' ? 'chosen' : ''}" data-vote="like" data-id="${id}" aria-pressed="${votes[id] === 'like'}">♡ ${labels[0]}</button><button type="button" class="vote-button ${votes[id] === 'dislike' ? 'chosen' : ''}" data-vote="dislike" data-id="${id}" aria-pressed="${votes[id] === 'dislike'}">× ${labels[1]}</button></div>`;
  }
  function mapVote() {
    const e = entries.find(item => item.id === selected);
    $('map-vote').innerHTML = `<strong>${String(e.id).padStart(2, '0')} ${esc(e.name)}</strong>${voteControls(e.id)}`;
  }
  async function setVote(id, choice) {
    if (pendingVotes.has(id)) return;
    const next = votes[id] === choice ? null : choice;
    pendingVotes.add(id);
    $('vote-status').textContent = language === 'th' ? 'กำลังบันทึก...' : '保存中...';
    try {
      await migrationPromise;
      if (!visitorId) throw new Error('Browser storage unavailable');
      const response = await fetch(voteApi, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ visitorId, condoId: id, choice: next })
      });
      if (!response.ok) throw new Error(`Vote API: ${response.status}`);
      if (next === null) delete votes[id];
      else votes[id] = next;
      try { window.localStorage?.setItem(voteKey, JSON.stringify(votes)); } catch (_) {}
      $('vote-status').textContent = language === 'th' ? 'บันทึกแล้ว' : 'サーバーに保存しました';
    } catch (_) {
      $('vote-status').textContent = language === 'th' ? 'บันทึกไม่สำเร็จ กรุณาลองอีกครั้ง' : '保存できませんでした。再試行してください';
      return;
    } finally {
      pendingVotes.delete(id);
    }
    voteSummary(); details(); mapVote(); renderFallback();
    markers.forEach((marker, key) => {
      const pinElement = marker.getElement().querySelector('.pin');
      pinElement.classList.toggle('like', votes[key] === 'like');
      pinElement.classList.toggle('dislike', votes[key] === 'dislike');
    });
  }
  async function migrateVotes() {
    if (!visitorId || window.localStorage?.getItem(migratedKey)) return;
    for (const [id, choice] of Object.entries(votes)) {
      if (!entries.some(entry => entry.id === Number(id)) || !['like', 'dislike'].includes(choice)) continue;
      try {
        const response = await fetch(voteApi, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ visitorId, condoId: Number(id), choice })
        });
        if (!response.ok) throw new Error(`Vote API: ${response.status}`);
      } catch (_) {
        $('vote-status').textContent = language === 'th' ? 'ยังส่งคะแนนเดิมไม่สำเร็จ กรุณาโหลดหน้าอีกครั้ง' : '以前の評価を送信できませんでした。再読み込みしてください';
        return;
      }
    }
    try { window.localStorage?.setItem(migratedKey, '1'); } catch (_) {}
  }
  const completionYear = building => {
    const alternate = String(building.yearConflict || '').match(/\b(?:19|20)\d{2}\b/);
    return alternate ? Math.min(building.year, Number(alternate[0])) : building.year;
  };
  const order = () => [...entries].sort((a,b) => sort==='distance' ? a.building.distance-b.building.distance : sort==='year' ? completionYear(b.building)-completionYear(a.building) : sort==='area' ? b.unit.area-a.unit.area : a.id-b.id);
  function rows() {
    $('table-head').innerHTML = ['propertyPrice','transit','yearHead','areaHead','facilities'].map(x=>`<th>${t(x)}</th>`).join('');
    $('table-body').innerHTML = order().map(e => `<tr data-id="${e.id}" class="${selected===e.id?'active':''}"><td><button type="button" class="row-pick" data-id="${e.id}" aria-label="${esc(e.name)}">${e.id.toString().padStart(2,'0')}</button><a href="${e.unit.url}" target="_blank" rel="noopener noreferrer">${esc(e.name)} ↗</a><span class="rent-price">${rent(e.unit.rent)}</span>${occupancyNote(e)?`<small class="occupancy-note">${esc(occupancyNote(e))}</small>`:''}</td><td><strong>${esc(e.building.station)}</strong><span>${num(e.building.distance)} m</span></td><td>${age(completionYear(e.building))}</td><td><strong>${num(e.unit.area)} m²</strong><span>${e.unit.floor===null?t('unknown'):`${num(e.unit.floor)} ${t('floor')}`}</span></td><td><div class="mini">${value(e.building.pool)} ${value(e.building.sauna)} ${value(e.building.cowork)}</div></td></tr>`).join('');
    $('cards').innerHTML = order().map(e => `<article data-id="${e.id}" class="card ${selected===e.id?'active':''}"><button type="button" class="card-select" data-id="${e.id}"><span class="card-number">${e.id.toString().padStart(2,'0')}</span><span><strong>${esc(e.name)}</strong><small>${esc(e.building.station)} · ${num(e.building.distance)} m</small></span><span class="arrow">↗</span></button><div class="card-facts"><span class="rent-price">${rent(e.unit.rent)}</span><span>${num(e.unit.area)} m²</span><span>${e.unit.floor===null?t('unknown'):`${num(e.unit.floor)} ${t('floor')}`}</span></div>${occupancyNote(e)?`<p class="occupancy-note">${esc(occupancyNote(e))}</p>`:''}<div class="card-status">${t('pool')}: ${value(e.building.pool)} &nbsp; ${t('sauna')}: ${value(e.building.sauna)} &nbsp; ${t('cowork')}: ${value(e.building.cowork)}</div><a href="${e.unit.url}" target="_blank" rel="noopener noreferrer" class="listing-link">${t('photos')} ↗</a></article>`).join('');
    document.querySelectorAll('.row-pick,.card-select').forEach(el=>el.addEventListener('click',()=>choose(Number(el.dataset.id),true)));
    $('count').textContent = `${entries.length} / ${window.CONDOS.length}`;
  }
  function details() {
    const e = entries.find(x=>x.id===selected), b=e.building, u=e.unit;
    $('detail').innerHTML = `<div class="detail-title"><span class="detail-num">${String(e.id).padStart(2,'0')}</span><div><p class="overline">${t('details')}</p><h2>${esc(e.name)}</h2></div></div><div class="detail-grid"><div><h3>${t('unit')}</h3><p>${num(u.area)} m² · ${u.floor===null?t('unknown'):`${num(u.floor)} ${t('floor')}`}</p><p class="rent-price">${rent(u.rent)}</p>${occupancyNote(e)?`<p class="conflict-note">${esc(occupancyNote(e))}</p>`:''}<a href="${u.url}" target="_blank" rel="noopener noreferrer">${t('photos')} ↗</a><p class="hint">${e.gallery==='modal'?t('photoHint'):t('photoUnavailable')}</p></div><div><h3>${t('building')}</h3><dl><dt>${t('pool')}</dt><dd>${value(b.pool)}</dd><dt>${t('sauna')}</dt><dd>${value(b.sauna)}</dd><dt>${t('cowork')}</dt><dd>${value(b.cowork)}</dd><dt>${t('bath')}</dt><dd>${value(b.bath)}</dd></dl><p>${esc(b.other[language])}</p></div><div><h3>${t('sources')}</h3><ul class="sources"><li><a href="${u.url}" target="_blank" rel="noopener noreferrer">PropertyScout · ${t('unit')}</a></li><li><a href="${b.url}" target="_blank" rel="noopener noreferrer">PropertyScout · ${t('building')}</a></li>${b.extra.map((url,i)=>`<li><a href="${url}" target="_blank" rel="noopener noreferrer">${new URL(url).hostname} · ${i+1}</a></li>`).join('')}<li><a href="${b.coordinateSource}" target="_blank" rel="noopener noreferrer">${t('coordinate')} · ${new URL(b.coordinateSource).hostname}</a></li></ul>${b.coordinateCaveat?`<p class="conflict-note">${t('caveat')}</p>`:''}<small>${t('checked')} ${checked}</small></div></div>`;
    $('detail').querySelector('.detail-title').insertAdjacentHTML('afterend', voteControls(e.id));
    $('detail').querySelectorAll('.vote-button').forEach(button => button.addEventListener('click', () => setVote(Number(button.dataset.id), button.dataset.vote)));
  }
  function choose(id, fly, reveal=false) {
    selected=id;
    rows(); details(); mapVote();
    markers.forEach((m,k)=>m.getElement().querySelector('.pin').classList.toggle('active',k===id));
    document.querySelectorAll('.schematic-pin').forEach(button=>button.classList.toggle('active',Number(button.dataset.id)===id));
    const e=entries.find(x=>x.id===id);
    if(fly && map) map.flyTo([e.building.lat,e.building.lng],14,{duration:0.7});
    if(reveal) {
      if(window.matchMedia('(max-width: 850px)').matches) {
        document.querySelector(`.card[data-id="${id}"]`)?.scrollIntoView({block:'center',behavior:'smooth'});
      } else {
        const target = document.querySelector(`tr[data-id="${id}"]`);
        const table = document.querySelector('.table-wrap');
        if(target && table) table.scrollTo({
          top:table.scrollTop + target.getBoundingClientRect().top - table.getBoundingClientRect().top - (table.clientHeight - target.offsetHeight) / 2,
          behavior:'smooth'
        });
      }
    }
  }
  function pin(id,active) {
    return L.divIcon({
      className:'pin-wrap',
      html:`<span class="pin ${active?'active':''} ${votes[id] || ''}"><span>${String(id).padStart(2,'0')}</span></span>`,
      iconSize:[40,40],iconAnchor:[20,20]
    });
  }
  function fit() {
    if(!map) return;
    map.fitBounds(entries.map(e=>[e.building.lat,e.building.lng]),{padding:[36,36],maxZoom:12});
  }
  function renderFallback() {
    const fallback=$('map-fallback');
    if(!fallback) return;
    const latitudes=entries.map(e=>e.building.lat), longitudes=entries.map(e=>e.building.lng);
    const minLat=Math.min(...latitudes)-0.01, maxLat=Math.max(...latitudes)+0.01;
    const minLng=Math.min(...longitudes)-0.01, maxLng=Math.max(...longitudes)+0.01;
    fallback.innerHTML=`<div class="schematic-heading">BANGKOK <span>${entries.length} / ${window.CONDOS.length}</span></div><div class="schematic-north" aria-hidden="true">N ↑</div>${entries.map(e=>{
      const left=8+84*(e.building.lng-minLng)/(maxLng-minLng);
      const top=8+84*(maxLat-e.building.lat)/(maxLat-minLat);
      return `<button class="schematic-pin ${selected===e.id?'active':''} ${votes[e.id] || ''}" type="button" data-id="${e.id}" title="${esc(e.name)}" aria-label="${esc(e.name)}" style="left:${left.toFixed(3)}%;top:${top.toFixed(3)}%">${String(e.id).padStart(2,'0')}</button>`;
    }).join('')}`;
    fallback.querySelectorAll('.schematic-pin').forEach(button=>button.addEventListener('click',()=>choose(Number(button.dataset.id),false,true)));
  }
  function initMap() {
    renderFallback();
    const token=window.APP_MAPBOX_TOKEN;
    if(!window.L || typeof token!=='string' || !token.startsWith('pk.')) return;
    try {
      map=L.map('map-live',{zoomControl:false,scrollWheelZoom:false});
      L.control.zoom({position:'bottomright'}).addTo(map);
      entries.forEach(e=>markers.set(e.id,L.marker([e.building.lat,e.building.lng],{icon:pin(e.id,e.id===selected)}).addTo(map).on('click',()=>choose(e.id,false,true))));
      const tiles=L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/256/{z}/{x}/{y}?access_token=${encodeURIComponent(token)}`,{
        maxZoom:19,
        attribution:'&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });
      tiles.once('tileload',()=>{
        $('map-live').style.visibility='visible';
        $('map-live').setAttribute('aria-hidden','false');
        $('map-fallback').style.visibility='hidden';
      });
      tiles.addTo(map);
      fit();
    } catch(error) {
      map=null;
      markers.clear();
    }
  }
  function render() {
    document.documentElement.lang=language;
    $('lead').textContent = language === 'th' ? `${entries.length} อาคาร · ${entries.length} ห้องที่ระบุชัด · แยกข้อมูลโครงการออกจากข้อมูลห้อง` : `${entries.length}建物・指定の${entries.length}部屋。建物情報と部屋情報を分け、出典と未確認事項を明示します。`;
    document.querySelector('.stat strong').textContent=entries.length;
    for(const [id,key] of [['edition','edition'],['eyebrow','eyebrow'],['headline','headline'],['stat-label','stat'],['map-overline','mapOver'],['map-heading','mapHeading'],['fit-button','fit'],['map-note','mapNote'],['list-overline','listOver'],['list-heading','listHeading'],['sort-label','sort'],['footer-note','footer']]) $(id).textContent=t(key);
    $('footer-date').textContent=`${t('checked')} ${checked} · ${t('priceNote')} · ${t('dataWarning')}`;
    [...$('sort').options].forEach(o=>o.textContent=t(o.value));
    $('lang-th').setAttribute('aria-pressed',String(language==='th'));
    $('lang-ja').setAttribute('aria-pressed',String(language==='ja'));
    rows(); details(); mapVote(); renderFallback(); voteSummary();
  }
  $('lang-th').addEventListener('click',()=>{language='th';render()});
  $('lang-ja').addEventListener('click',()=>{language='ja';render()});
  $('sort').addEventListener('change',e=>{sort=e.target.value;rows()});
  $('fit-button').addEventListener('click',fit);
  $('map-vote').addEventListener('click', event => {
    const button = event.target.closest('.vote-button');
    if (button) return setVote(Number(button.dataset.id), button.dataset.vote);
  });
  render();initMap();migrationPromise = migrateVotes();
})();
