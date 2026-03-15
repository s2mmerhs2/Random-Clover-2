// CSS 연결 (상대 경로 확인)
import './style.css';

const drawBtn = document.getElementById('draw-button');
const messageDisplay = document.getElementById('lucky-message');
const container = document.getElementById('particle-container');

const luckQuotes = [
    "당신의 미소가 오늘 누군가에게 큰 힘이 됩니다 😊",
    "오늘 생각지도 못한 기분 좋은 소식이 도착해요! 💌",
    "지금 하고 있는 고민, 곧 시원하게 해결됩니다! ✨",
    "당신은 오늘 존재만으로도 빛나는 주인공이에요 👑",
    "오랫동안 바랐던 일이 드디어 시작되려고 하네요 🚀",
    "오늘은 모든 신호등이 초록불인 것처럼 술술 풀려요 🚦",
    "당신의 성실함이 최고의 보상으로 돌아올 날입니다 🏆",
    "오늘은 맛있는 음식과 함께 큰 행복을 느낄 거예요 🍰",
    "어딜 가든 당신을 반겨주는 사람들로 가득하네요 🤝",
    "오늘은 작은 행운들이 모여 큰 기쁨을 만듭니다 🍀",
    "거울 속 당신의 모습이 오늘따라 더욱 멋지네요 ✨",
    "당신의 앞날은 밝은 햇살처럼 찬란할 거예요 ☀️",
    "오늘 당신이 내딛는 발걸음마다 복이 넝쿨째! 🍇",
    "사랑하는 사람에게 따뜻한 고백을 듣게 될지도? 💝",
    "오늘은 집중력이 폭발해서 능률이 최고가 됩니다 💪",
    "지갑에 기분 좋은 행운의 여신이 머물고 있네요 💸",
    "오늘 만나는 모든 인연이 당신의 편이 되어줄 거예요 🕊️",
    "당신은 충분히 잘하고 있어요, 자신을 믿으세요 👍",
    "포근한 행운이 당신의 하루를 감싸 안아줄 거예요 🧸",
    "오늘은 하늘만 봐도 기분이 좋아지는 마법 같은 날 🌈",
    "잊고 있었던 소중한 물건을 되찾을 운세입니다 💎",
    "오늘의 당신은 그 누구보다 매력적이고 소중해요 ❤️",
    "기분 좋은 우연이 당신을 멋진 곳으로 안내합니다 ⛲",
    "당신을 향한 칭찬이 여기저기서 들려오는 날! 🗣️",
    "오늘은 휴식마저도 생산적인 최고의 하루예요 ☕",
    "새로운 도전을 시작하기에 이보다 좋은 날은 없어요 🏁",
    "당신이 뿌린 친절의 씨앗이 오늘 꽃을 피웁니다 🌸",
    "오늘은 우주의 모든 기운이 당신을 응원하고 있어요 🌌",
    "어려웠던 문제에 대한 답을 찾게 될 예감입니다 💡",
    "웃음이 끊이지 않는 즐거운 하루가 보장되어 있어요 🌻"
];

const emojis = ['💚', '🤍', '🍀', '✨'];
let isRolling = false;

function createParticle() {
    const p = document.createElement('span');
    p.classList.add('lucky-particle');
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    p.style.left = (Math.random() * 90 + 5) + 'vw';
    const duration = Math.random() * 2 + 2.5;
    p.style.animationDuration = duration + 's';
    container.appendChild(p);
    setTimeout(() => p.remove(), duration * 1000);
}

function startRoll() {
    if (isRolling) return;
    isRolling = true;
    
    const particleCount = window.innerWidth < 768 ? 20 : 30;
    for(let i=0; i < particleCount; i++) {
        setTimeout(createParticle, i * 70);
    }

    let count = 0;
    const rollInterval = setInterval(() => {
        messageDisplay.textContent = luckQuotes[Math.floor(Math.random() * luckQuotes.length)];
        count++;

        if (count > 12) {
            clearInterval(rollInterval);
            const finalQuote = luckQuotes[Math.floor(Math.random() * luckQuotes.length)];
            messageDisplay.textContent = finalQuote;
            isRolling = false;
        }
    }, 60); 
}

if (drawBtn) {
    drawBtn.addEventListener('click', startRoll);
}