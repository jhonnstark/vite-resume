<template>
  <main id="about" class="main">
    <div class="about-header">
      {{ $t('about.career') }} <span class="color">{{ $t('about.professional') }}</span>
      <span class="header-caption"
        >{{ $t('about.download') }}<span class="color"> {{ $t('about.resume') }}</span></span
      >
    </div>
    <!--about content-->
    <div id="about-content">
      <div class="about-main">
        <div class="about-first-paragraph wow">
          <!--about description-->
          <span class="about-first-line">
            {{ $t('about.iam') }}
            <span class="color">{{ $t('about.developer') }}</span>
            {{ $t('about.specialized') }} <span class="color">Laravel</span>
          </span>
          <br />
          <span class="about-second-line">
            {{ $t('about.description') }}
          </span>
          <div class="cv">
            <a download="CV-JonathanCervantes.pdf" href="CV-JonathanCervantes.pdf" target="_blank">
              <button>
                {{ $t('about.download') }} {{ $t('about.resume') }}
                <img alt="download cv" class="colors" src="../assets/img/download.svg" />
              </button>
            </a>
          </div>
        </div>
        <!--about picture-->
        <div class="about-img">
          <img alt="Code" src="../assets/img/jhon3.jpg" />
        </div>
      </div>
    </div>
    <!--services start-->
    <div id="services">
      <!--services header-->
      <div class="services-heading wow">
        {{ $t('about.my') }} <span class="color">{{ $t('about.services') }}</span>
      </div>
      <!--services header end-->
      <!--services content-->
      <div class="services-content">
        <div class="service-one service wow">
          <div class="service-img">
            <img alt="service-one" src="../assets/img/coding.png" />
          </div>
          <div class="service-description">
            <h2>{{ $t('about.design.title') }}</h2>
            <p>{{ $t('about.design.description') }}</p>
          </div>
        </div>
        <div class="service-two service wow">
          <div class="service-img">
            <img alt="service-two" src="../assets/img/basededatos.png" />
          </div>
          <div class="service-description">
            <h2>{{ $t('about.dataBase.title') }}</h2>
            <p>{{ $t('about.dataBase.description') }}</p>
          </div>
        </div>
        <div class="service-three service wow">
          <div class="service-img">
            <img alt="service-three" src="../assets/img/bulb.png" />
          </div>
          <div class="service-description">
            <h2>{{ $t('about.academic.title') }}</h2>
            <p>{{ $t('about.academic.description') }}</p>
          </div>
        </div>
      </div>
    </div>
    <!--services content end-->
    <!--services end-->
    <div id="skills">
      <div class="skills-header">
        {{ $t('about.my') }} <span class="color"> {{ $t('about.skills') }}</span>
      </div>
      <div class="skills-content" style="text-align: center">
        <div class="skill-html skill">
          <div class="skill-text">
            <img alt="laravel" class="skill-img" src="/src/assets/img/icons/laravel.png" />
            <div class="html">Laravel</div>
          </div>
          <div class="html-prog wow prog">
            <div class="Laravel-progress wow">100%</div>
          </div>
        </div>
        <div class="skill-html skill">
          <div class="skill-text">
            <img alt="php" class="skill-img" src="/src/assets/img/icons/php.png" />
            <div class="html">PHP</div>
          </div>
          <div class="html-prog wow prog">
            <div class="php-progress wow">95%</div>
          </div>
        </div>
        <div class="skill-html skill">
          <div class="skill-text">
            <img alt="vue" class="skill-img" src="/src/assets/img/icons/vue.png" />
            <div class="html">Vue 3</div>
          </div>
          <div class="html-prog wow prog">
            <div class="php-progress wow">95%</div>
          </div>
        </div>
        <div class="skill-html skill">
          <div class="skill-text">
            <img alt="react" class="skill-img" src="/src/assets/img/icons/react.png" />
            <div class="html">ReactJS</div>
          </div>
          <div class="html-prog wow prog">
            <div class="ReactJS-progress wow">85%</div>
          </div>
        </div>
        <div class="skill-html skill">
          <div class="skill-text">
            <img alt="go" class="skill-img" src="/src/assets/img/icons/go.png" />
            <div class="html">Golang</div>
          </div>
          <div class="html-prog wow prog">
            <div class="php-progress wow">95%</div>
          </div>
        </div>
        <div class="skill-html skill">
          <div class="skill-text">
            <img alt="nodejs" class="skill-img" src="/src/assets/img/icons/nodejs.png" />
            <div class="html">NodeJS</div>
          </div>
          <div class="html-prog wow prog">
            <div class="Unity-progress wow">50%</div>
          </div>
        </div>
        <div class="skill-html skill">
          <div class="skill-text">
            <img alt="mysql" class="skill-img" src="/src/assets/img/icons/mysql.png" />
            <div class="html">MySQL</div>
          </div>
          <div class="html-prog wow prog">
            <div class="ReactJS-progress wow">85%</div>
          </div>
        </div>
        <div class="skill-html skill">
          <div class="skill-text">
            <img alt="redis" class="skill-img" src="/src/assets/img/icons/redis.png" />
            <div class="html">Redis</div>
          </div>
          <div class="html-prog wow prog">
            <div class="ReactJS-progress wow">85%</div>
          </div>
        </div>
        <div class="skill-html skill">
          <div class="skill-text">
            <img alt="docker" class="skill-img" src="/src/assets/img/icons/docker.png" />
            <div class="html">Docker</div>
          </div>
          <div class="html-prog wow prog">
            <div class="seo-progress wow">80%</div>
          </div>
        </div>
        <div class="skill-html skill">
          <div class="skill-text">
            <img alt="html" class="skill-img" src="/src/assets/img/icons/html.png" />
            <div class="html">HTML</div>
          </div>
          <div class="html-prog wow prog">
            <div class="html-progress wow">100%</div>
          </div>
        </div>
        <div class="skill-html skill">
          <div class="skill-text">
            <img alt="css3" class="skill-img" src="/src/assets/img/icons/css3.png" />
            <div class="html">CCS3</div>
          </div>
          <div class="html-prog wow prog">
            <div class="Wordpress-progress wow">90%</div>
          </div>
        </div>
        <div class="skill-html skill">
          <div class="skill-text">
            <img alt="js" class="skill-img" src="/src/assets/img/icons/js.png" />
            <div class="html">Javascript</div>
          </div>
          <div class="html-prog wow prog">
            <div class="js-progress wow">95%</div>
          </div>
        </div>
        <div class="skill-html skill">
          <div class="skill-text">
            <img alt="jquery" class="skill-img" src="/src/assets/img/icons/jquery.png" />
            <div class="html">JQuery</div>
          </div>
          <div class="html-prog wow prog">
            <div class="jquery-progress wow">100%</div>
          </div>
        </div>
        <div class="skill-html skill">
          <div class="skill-text">
            <img alt="wordpress" class="skill-img" src="/src/assets/img/icons/wordpress.png" />
            <div class="html">Wordpress</div>
          </div>
          <div class="html-prog wow prog">
            <div class="Wordpress-progress wow">95%</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.about {
  padding-top: 60px;
}
</style>
<script lang="ts" setup></script>
