<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('all')
const selectedBreed = ref(null)

const categories = [
  { id: 'all', label: '全部品种' },
  { id: 'foreign', label: '国外引进' },
  { id: 'local', label: '中国地方' },
]

const breeds = [
  {
    id: 1,
    name: '杜洛克',
    english: 'Duroc',
    category: 'foreign',
    origin: '美国',
    color: '#c45c26',
    emoji: '🐷',
    traits: ['瘦肉率高', '生长快', '肉质优良'],
    desc: '杜洛克猪以其深红色被毛和优秀的瘦肉率著称，是国际公认的三元杂交父本首选，肉质大理石纹分布均匀，风味浓郁。',
    stats: { weight: '100-120kg', period: '6-7个月', lean: '65%+' },
  },
  {
    id: 2,
    name: '长白猪',
    english: 'Landrace',
    category: 'foreign',
    origin: '丹麦',
    color: '#5c7cfa',
    emoji: '🐽',
    traits: ['体躯长', '产仔多', '适应性强'],
    desc: '长白猪体型修长、被毛白色，以高繁殖力和良好的母性闻名，是母猪品系的核心品种，适合规模化养殖。',
    stats: { weight: '90-110kg', period: '6个月', lean: '60%+' },
  },
  {
    id: 3,
    name: '大约克',
    english: 'Large White',
    category: 'foreign',
    origin: '英国',
    color: '#ffd43b',
    emoji: '🐖',
    traits: ['生长迅速', '饲料转化率高', '体型大'],
    desc: '大约克猪又称大白猪，是全球应用最广泛的瘦肉型猪种，生长性能优异，与长白、杜洛克构成经典三元杂交体系。',
    stats: { weight: '100-130kg', period: '6-7个月', lean: '62%+' },
  },
  {
    id: 4,
    name: '太湖猪',
    english: 'Taihu',
    category: 'local',
    origin: '江苏·太湖流域',
    color: '#2a9d8f',
    emoji: '🌾',
    traits: ['繁殖力极强', '耐粗饲', '肉质鲜美'],
    desc: '太湖猪是中国著名的地方品种，以"多胎高产"闻名于世，单窝产仔可达15头以上，肉质细嫩、脂肪分布均匀。',
    stats: { weight: '70-90kg', period: '8-10个月', lean: '45%+' },
  },
  {
    id: 5,
    name: '荣昌猪',
    english: 'Rongchang',
    category: 'local',
    origin: '重庆·荣昌',
    color: '#e76f51',
    emoji: '🏮',
    traits: ['白鬃白尾', '适应性强', '优质瘦肉'],
    desc: '荣昌猪是中国八大优良地方猪种之一，全身白毛、鬃毛洁白，瘦肉率较高，是"荣昌猪"地理标志保护产品。',
    stats: { weight: '80-100kg', period: '8-9个月', lean: '50%+' },
  },
  {
    id: 6,
    name: '金华猪',
    english: 'Jinhua',
    category: 'local',
    origin: '浙江·金华',
    color: '#9b59b6',
    emoji: '🍖',
    traits: ['火腿专用', '脂肪适中', '风味独特'],
    desc: '金华猪是制作金华火腿的专用猪种，头尾黑色、中间白，脂肪适中、肌肉发达，经传统腌制后风味绝佳，享誉海内外。',
    stats: { weight: '60-75kg', period: '10-12个月', lean: '40%+' },
  },
  {
    id: 7,
    name: '宁乡猪',
    english: 'Ningxiang',
    category: 'local',
    origin: '湖南·宁乡',
    color: '#264653',
    emoji: '🎋',
    traits: ['毛色花斑', '早熟易肥', '肉嫩味鲜'],
    desc: '宁乡猪毛色黑白花斑，早熟易肥，肉质细嫩、大理石纹明显，是湘菜名肴"毛氏红烧肉"的传统用猪。',
    stats: { weight: '70-85kg', period: '7-8个月', lean: '42%+' },
  },
  {
    id: 8,
    name: '陆川猪',
    english: 'Luchuan',
    category: 'local',
    origin: '广西·陆川',
    color: '#606c38',
    emoji: '🌿',
    traits: ['短腿体型', '抗病力强', '肉香浓郁'],
    desc: '陆川猪体型小巧、四肢短粗，被毛黑白相间，抗病力和耐粗饲能力突出，肉香浓郁，是华南地区重要的地方猪种。',
    stats: { weight: '65-80kg', period: '8-9个月', lean: '43%+' },
  },
]

const filteredBreeds = computed(() => {
  if (activeCategory.value === 'all') return breeds
  return breeds.filter((b) => b.category === activeCategory.value)
})

const stats = [
  { value: '8+', label: '精选品种' },
  { value: '2', label: '品系分类' },
  { value: '5000+', label: '年养殖历史' },
  { value: '100+', label: '国家保护品种' },
]

function openDetail(breed) {
  selectedBreed.value = breed
}

function closeDetail() {
  selectedBreed.value = null
}
</script>

<template>
  <div class="page">
    <!-- 顶部导航 -->
    <header class="header">
      <div class="header-inner">
        <div class="logo">
          <span class="logo-icon">🐷</span>
          <span class="logo-text">猪品种图鉴</span>
        </div>
        <nav class="nav">
          <a href="#hero">首页</a>
          <a href="#breeds">品种介绍</a>
          <a href="#compare">对比概览</a>
          <a href="#about">关于</a>
        </nav>
      </div>
    </header>

    <!-- Hero 区域 -->
    <section id="hero" class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <span class="hero-badge">Pig Breed Encyclopedia</span>
        <h1 class="hero-title">
          探索世界优质<br />
          <em>猪品种</em>之美
        </h1>
        <p class="hero-desc">
          从国际主流瘦肉型猪种，到中华千年地方名猪——<br />
          一页纵览品种特性、产地文化与养殖价值。
        </p>
        <div class="hero-actions">
          <a href="#breeds" class="btn btn-primary">浏览品种</a>
          <a href="#compare" class="btn btn-outline">查看对比</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-circle hero-circle-1"></div>
        <div class="hero-circle hero-circle-2"></div>
        <span class="hero-emoji">🐷</span>
      </div>
    </section>

    <!-- 数据概览 -->
    <section class="stats-section">
      <div class="stats-grid">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <span class="stat-value">{{ stat.value }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <!-- 品种介绍 -->
    <section id="breeds" class="breeds-section">
      <div class="section-header">
        <h2 class="section-title">品种图鉴</h2>
        <p class="section-subtitle">精选国内外代表性猪种，了解各自特点与适用场景</p>
      </div>

      <div class="category-tabs">
        <button
          v-for="cat in categories"
          :key="cat.id"
          :class="['tab', { active: activeCategory === cat.id }]"
          @click="activeCategory = cat.id"
        >
          {{ cat.label }}
        </button>
      </div>

      <div class="breeds-grid">
        <article
          v-for="breed in filteredBreeds"
          :key="breed.id"
          class="breed-card"
          :style="{ '--accent': breed.color }"
          @click="openDetail(breed)"
        >
          <div class="breed-card-top">
            <span class="breed-emoji">{{ breed.emoji }}</span>
            <span class="breed-tag">{{ breed.category === 'foreign' ? '引进' : '地方' }}</span>
          </div>
          <h3 class="breed-name">{{ breed.name }}</h3>
          <p class="breed-english">{{ breed.english }}</p>
          <p class="breed-origin">📍 {{ breed.origin }}</p>
          <div class="breed-traits">
            <span v-for="t in breed.traits" :key="t" class="trait-tag">{{ t }}</span>
          </div>
          <p class="breed-desc">{{ breed.desc }}</p>
          <button class="breed-more">查看详情 →</button>
        </article>
      </div>
    </section>

    <!-- 对比概览 -->
    <section id="compare" class="compare-section">
      <div class="section-header">
        <h2 class="section-title">品种对比概览</h2>
        <p class="section-subtitle">国外引进品种 vs 中国地方品种，各有优势</p>
      </div>
      <div class="compare-grid">
        <div class="compare-card compare-foreign">
          <div class="compare-icon">🌍</div>
          <h3>国外引进品种</h3>
          <ul>
            <li>瘦肉率高，适合规模化商品猪生产</li>
            <li>生长速度快，饲料转化率高</li>
            <li>三元杂交体系的核心组成</li>
            <li>代表：杜洛克、长白、大约克</li>
          </ul>
        </div>
        <div class="compare-divider">
          <span>VS</span>
        </div>
        <div class="compare-card compare-local">
          <div class="compare-icon">🏯</div>
          <h3>中国地方品种</h3>
          <ul>
            <li>肉质风味独特，适合高端餐饮</li>
            <li>繁殖力强，耐粗饲、抗病性好</li>
            <li>承载地方饮食文化与非遗技艺</li>
            <li>代表：太湖、荣昌、金华、宁乡</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 关于 -->
    <section id="about" class="about-section">
      <div class="about-inner">
        <h2 class="section-title">关于猪品种图鉴</h2>
        <p>
          中国是世界上养猪历史最悠久的国家之一，地方猪种资源极为丰富。与此同时，杜洛克、长白、大约克等国外优良品种的引进与杂交，推动了现代养猪业的快速发展。
        </p>
        <p>
          本页面旨在以简洁直观的方式，帮助养殖从业者、食品从业者及爱好者了解不同猪种的特性与价值，促进优良品种的保护与合理利用。
        </p>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <p>🐷 猪品种图鉴 · Vue 3 单页展示 · 仅供学习参考</p>
    </footer>

    <!-- 详情弹窗 -->
    <Transition name="modal">
      <div v-if="selectedBreed" class="modal-overlay" @click.self="closeDetail">
        <div class="modal" :style="{ '--accent': selectedBreed.color }">
          <button class="modal-close" @click="closeDetail">✕</button>
          <div class="modal-header">
            <span class="modal-emoji">{{ selectedBreed.emoji }}</span>
            <div>
              <h2>{{ selectedBreed.name }}</h2>
              <p class="modal-english">{{ selectedBreed.english }} · {{ selectedBreed.origin }}</p>
            </div>
          </div>
          <p class="modal-desc">{{ selectedBreed.desc }}</p>
          <div class="modal-stats">
            <div class="modal-stat">
              <span class="modal-stat-label">出栏体重</span>
              <span class="modal-stat-value">{{ selectedBreed.stats.weight }}</span>
            </div>
            <div class="modal-stat">
              <span class="modal-stat-label">育肥周期</span>
              <span class="modal-stat-value">{{ selectedBreed.stats.period }}</span>
            </div>
            <div class="modal-stat">
              <span class="modal-stat-label">瘦肉率</span>
              <span class="modal-stat-value">{{ selectedBreed.stats.lean }}</span>
            </div>
          </div>
          <div class="modal-traits">
            <span v-for="t in selectedBreed.traits" :key="t" class="trait-tag">{{ t }}</span>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
}

/* Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(250, 247, 242, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
}

.header-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 32px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 1.15rem;
}

.logo-icon {
  font-size: 1.5rem;
}

.nav {
  display: flex;
  gap: 32px;
}

.nav a {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  transition: color 0.2s;
}

.nav a:hover {
  color: var(--color-primary);
}

/* Hero */
.hero {
  position: relative;
  min-height: 560px;
  display: flex;
  align-items: center;
  padding: 120px 32px 80px;
  max-width: var(--max-width);
  margin: 0 auto;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 70% 50%, rgba(196, 92, 38, 0.08) 0%, transparent 60%);
  pointer-events: none;
}

.hero-content {
  flex: 1;
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(196, 92, 38, 0.1);
  color: var(--color-primary);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  margin-bottom: 24px;
}

.hero-title {
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
  color: var(--color-text);
}

.hero-title em {
  font-style: normal;
  color: var(--color-primary);
}

.hero-desc {
  font-size: 1.1rem;
  color: var(--color-text-muted);
  line-height: 1.8;
  margin-bottom: 36px;
}

.hero-actions {
  display: flex;
  gap: 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 14px 28px;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-primary {
  background: var(--color-primary);
  color: #fff;
  box-shadow: 0 4px 16px rgba(196, 92, 38, 0.3);
}

.btn-primary:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
}

.btn-outline {
  border: 2px solid var(--color-border);
  color: var(--color-text);
}

.btn-outline:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.hero-visual {
  position: relative;
  width: 320px;
  height: 320px;
  flex-shrink: 0;
}

.hero-circle {
  position: absolute;
  border-radius: 50%;
}

.hero-circle-1 {
  width: 280px;
  height: 280px;
  top: 20px;
  left: 20px;
  background: linear-gradient(135deg, rgba(196, 92, 38, 0.15), rgba(244, 162, 97, 0.1));
}

.hero-circle-2 {
  width: 200px;
  height: 200px;
  bottom: 0;
  right: 0;
  background: linear-gradient(135deg, rgba(42, 157, 143, 0.12), rgba(42, 157, 143, 0.05));
}

.hero-emoji {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 8rem;
  filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.1));
}

/* Stats */
.stats-section {
  background: var(--color-bg-card);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: 48px 32px;
}

.stats-grid {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1.2;
}

.stat-label {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  margin-top: 4px;
}

/* Section common */
.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.section-subtitle {
  color: var(--color-text-muted);
  font-size: 1.05rem;
}

/* Breeds */
.breeds-section {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 80px 32px;
}

.category-tabs {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 48px;
}

.tab {
  padding: 10px 24px;
  border-radius: 24px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text-muted);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  transition: all 0.2s;
}

.tab:hover {
  border-color: var(--color-primary-light);
  color: var(--color-primary);
}

.tab.active {
  background: var(--color-primary);
  color: #fff;
  border-color: var(--color-primary);
}

.breeds-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.breed-card {
  background: var(--color-bg-card);
  border-radius: var(--radius-lg);
  padding: 28px;
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: all 0.25s;
  position: relative;
  overflow: hidden;
}

.breed-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--accent);
}

.breed-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: transparent;
}

.breed-card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.breed-emoji {
  font-size: 2.5rem;
}

.breed-tag {
  font-size: 0.75rem;
  padding: 4px 10px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.05);
  color: var(--color-text-muted);
  font-weight: 500;
}

.breed-name {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 2px;
}

.breed-english {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin-bottom: 8px;
}

.breed-origin {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin-bottom: 14px;
}

.breed-traits {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
}

.trait-tag {
  font-size: 0.75rem;
  padding: 4px 10px;
  border-radius: 6px;
  background: color-mix(in srgb, var(--accent, var(--color-primary)) 12%, transparent);
  color: var(--accent, var(--color-primary));
  font-weight: 500;
}

.breed-desc {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 16px;
}

.breed-more {
  font-size: 0.85rem;
  color: var(--accent, var(--color-primary));
  font-weight: 600;
}

/* Compare */
.compare-section {
  background: linear-gradient(180deg, var(--color-bg) 0%, #f0ebe3 100%);
  padding: 80px 32px;
}

.compare-grid {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 32px;
  align-items: stretch;
}

.compare-card {
  background: var(--color-bg-card);
  border-radius: var(--radius-lg);
  padding: 36px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border);
}

.compare-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.compare-card h3 {
  font-size: 1.25rem;
  margin-bottom: 20px;
}

.compare-card ul {
  list-style: none;
}

.compare-card li {
  padding: 10px 0;
  border-bottom: 1px solid var(--color-border);
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.compare-card li:last-child {
  border-bottom: none;
}

.compare-divider {
  display: flex;
  align-items: center;
  justify-content: center;
}

.compare-divider span {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
}

/* About */
.about-section {
  max-width: 720px;
  margin: 0 auto;
  padding: 80px 32px;
  text-align: center;
}

.about-inner p {
  color: var(--color-text-muted);
  line-height: 1.9;
  margin-bottom: 16px;
  font-size: 1rem;
}

/* Footer */
.footer {
  text-align: center;
  padding: 32px;
  border-top: 1px solid var(--color-border);
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(44, 36, 22, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  padding: 32px;
}

.modal {
  background: var(--color-bg-card);
  border-radius: var(--radius-lg);
  padding: 40px;
  max-width: 520px;
  width: 100%;
  position: relative;
  box-shadow: var(--shadow-lg);
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--color-bg);
  color: var(--color-text-muted);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.modal-close:hover {
  background: var(--color-border);
}

.modal-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
}

.modal-emoji {
  font-size: 3.5rem;
}

.modal-header h2 {
  font-size: 1.75rem;
}

.modal-english {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  margin-top: 4px;
}

.modal-desc {
  color: var(--color-text-muted);
  line-height: 1.8;
  margin-bottom: 28px;
}

.modal-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

.modal-stat {
  text-align: center;
  padding: 16px;
  background: var(--color-bg);
  border-radius: var(--radius);
}

.modal-stat-label {
  display: block;
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin-bottom: 6px;
}

.modal-stat-value {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--accent, var(--color-primary));
}

.modal-traits {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.modal-traits .trait-tag {
  --accent: var(--accent, var(--color-primary));
}

/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-active .modal,
.modal-leave-active .modal {
  transition: transform 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal,
.modal-leave-to .modal {
  transform: scale(0.95) translateY(10px);
}

/* Responsive - PC first, minor tablet fallback */
@media (max-width: 1024px) {
  .breeds-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-visual {
    display: none;
  }
}

@media (max-width: 768px) {
  .breeds-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .compare-grid {
    grid-template-columns: 1fr;
  }

  .compare-divider {
    padding: 16px 0;
  }
}
</style>
