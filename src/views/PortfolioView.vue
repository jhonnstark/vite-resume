<script lang="ts" setup></script>

<template>
  <main id="portfolio" class="main">
    <div class="portfolio-header">
      <span class="color"> {{ $t('portfolio.mi') }} </span> {{ $t('portfolio.title') }}
      <span class="header-caption">
        {{ $t('portfolio.subtitle') }}<span class="color">{{ $t('portfolio.works') }}</span>
      </span>

      <div class="portfolio-subtitle">
        <p>{{ $t('portfolio.description') }}</p>
      </div>
    </div>

    <div id="portfolio-content">
      <div id="transportamex-link" class="portfolio portfolio-first">
        <h2>Transportamex</h2>
        <div class="portfolio-wrap">
          <div class="portfolio-image">
            <img alt="transportamex" src="../assets/img/thumbnail/transportamex-min-min.png" />
          </div>
          <div class="portfolio-image">
            <img alt="transportamex" src="../assets/img/thumbnail/transportamex2-min-min.png" />
          </div>
          <div class="portfolio-image">
            <img alt="transportamex" src="../assets/img/thumbnail/transportamex3-min-min.png" />
          </div>
          <div class="portfolio-image">
            <img alt="transportamex" src="../assets/img/thumbnail/transportamex5-min-min.png" />
          </div>
        </div>
        <div class="portfolio-text">
          <p>{{ $t('transportamex.description') }}</p>
          <div class="button">
            <a href="https://transportamex.com/" target="_blank">
              <button>
                <span class="index"> Ver<i class="gg-arrow-right"></i> </span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div id="pailot-link" class="portfolio portfolio-first">
        <h2>Pailot</h2>
        <div class="portfolio-wrap">
          <div class="portfolio-image">
            <img alt="Pailot" src="../assets/img/thumbnail/pailot-min-min.jpg" />
          </div>
          <div class="portfolio-image">
            <img alt="Pailot" src="../assets/img/thumbnail/pailot2-min-min.jpg" />
          </div>
          <div class="portfolio-image">
            <img alt="Pailot" src="../assets/img/thumbnail/pailot4-min-min.png" />
          </div>
          <div class="portfolio-image">
            <img alt="Pailot" src="../assets/img/thumbnail/pailot5-min-min.jpg" />
          </div>
        </div>
        <div class="portfolio-text">
          <p>{{ $t('pailot.description') }}</p>
        </div>
      </div>

      <div id="busolinea-link" class="portfolio portfolio-first">
        <h2>Busolinea</h2>
        <div class="portfolio-wrap">
          <div class="portfolio-image">
            <img alt="Busolinea" src="../assets/img/thumbnail/buso-min-min.png" />
          </div>
          <div class="portfolio-image">
            <img alt="Busolinea" src="../assets/img/thumbnail/buso-min-min.png" />
          </div>
          <div class="portfolio-image">
            <img alt="Busolinea" src="../assets/img/thumbnail/buso2-min-min.png" />
          </div>
          <div class="portfolio-image">
            <img alt="Busolinea" src="../assets/img/thumbnail/buso1-min-min.png" />
          </div>
        </div>
        <div class="portfolio-text">
          <p>{{ $t('busolinea.description') }}</p>
        </div>
      </div>

      <div id="cimaco-link" class="portfolio portfolio-first">
        <h2>Cimaco</h2>
        <div class="portfolio-wrap">
          <div class="portfolio-image">
            <img alt="cimaco" src="../assets/img/thumbnail/cimaco-min-min.png" />
          </div>
          <div class="portfolio-image">
            <img alt="cimaco" src="../assets/img/thumbnail/cimaco3-min-min.png" />
          </div>
          <div class="portfolio-image">
            <img alt="cimaco" src="../assets/img/thumbnail/cimaco2-min-min.png" />
          </div>
          <div class="portfolio-image">
            <img alt="cimaco" src="../assets/img/thumbnail/cimaco4-min-min.png" />
          </div>
        </div>
        <div class="portfolio-text">
          <p>{{ $t('cimaco.description') }}</p>
        </div>
      </div>

      <div id="salud-link" class="portfolio portfolio-first">
        <h2>App Salud</h2>
        <div class="portfolio-wrap">
          <div class="portfolio-image">
            <img alt="salud" src="../assets/img/thumbnail/salud-min-min.png" />
          </div>
          <div class="portfolio-image">
            <img alt="salud2" src="../assets/img/thumbnail/salud2-min-min.png" />
          </div>
          <div class="portfolio-image">
            <img alt="salud3" src="../assets/img/thumbnail/salud3-min-min.png" />
          </div>
        </div>
        <div class="portfolio-text">
          <p>{{ $t('salud.description') }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
