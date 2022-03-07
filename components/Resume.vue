<template>
  <div>
    <HeaderNav/>
  <div class="container mx-auto max-w-screen-xl text-white">
    <main
      id="wrapper"
      class="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl bg-gradient-to-r from-blue-500"
    >
      <div
        id="sidebar"
        class="w-full sm:max-w-sm p-8 bg-gradient-to-b from-blue-300"
      >
        <div class="px-2 mb-12">
          <img
            src="m.jpg"
            alt="Profile Picture"
            class="rounded-full w-48 mx-auto mb-2"
          />
          <h1 class="text-center text-3xl font-semibold mb-2">Melvin Odhiambo</h1>
          <h2 class="text-center text-xl font-light">Fullstack Developer</h2>
        </div>

        <div class="font-light text-lg px-2 mb-12">
          <h2 class="text-xl font-semibold mb-4">Contact</h2>
          <div class="flex items-center my-3">
            <img
              src="/assets/mail-outline.svg"
              class="inline w-6 mr-4"
              alt="Mail icon"
            />
            <a href="mailto:">melvin11665@gmail.com</a>
          </div>

        </div>

        <div class="font-light text-lg px-2 mb-12">


        </div>

        <div class="font-light text-lg px-2 mb-12">
          <h2 class="text-xl font-semibold mb-4">On the Web</h2>
          <div class="flex items-center my-3">
            <img
              src="/assets/logo-github.svg"
              class="inline w-6 mr-4"
              alt="GitHub Logo"
            />
            <a href="https://github.com/melvin78" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>

          <div class="flex items-center my-3">
            <img
              src="/assets/logo-linkedin.svg"
              class="inline w-6 mr-4"
              alt="LinkedIn Logo"
            />
            <a href="https://www.linkedin.com/in/melvin-ochieng-ezeky78" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>


          <div class="flex items-center my-3">
            <img
              src="/assets/globe-outline.svg"
              class="inline w-6 mr-4"
              alt="Globe icon"
            />
            <a href="https://webmelvin.me" target="_blank" rel="noopener noreferrer"
            >Portfolio</a
            >
          </div>
        </div>

        <div class="font-light text-lg px-2 mb-12">
          <h2 class="text-xl font-semibold mb-4">Skills & Tools</h2>
          <ul class="list-none">
            <li>
              <label for="js-skill">JavaScript</label>
              <progress id="js-skill" max="100" value="80"></progress>
            </li>
            <li>
              <label for="vue-skill">Vue / Nuxt.js</label>
              <progress id="vue-skill" max="100" value="80"></progress>
            </li>
            <li>
              <label for="c-sharp-skill">C# /.Net</label>
              <progress id="c-sharp-skill" max="100" value="66"></progress>
            </li>
            <li>
              <label for="php-skill">PHP / Laravel</label>
              <progress id="php-skill" max="100" value="72"></progress>
            </li>
            <li>
              <label for="mysql-skill">MySQL</label>
              <progress id="mysql-skill" max="100" value="76"></progress>
            </li>
            <li>
              <label for="pyhton-skill">Python / Django </label>
              <progress id="pyhton-skill" max="100" value="45"></progress>
            </li>
            <li>
              <label for="css-skill">CSS</label>
              <progress id="css-skill" max="100" value="75"></progress>
            </li>
            <li>
              <label for="design-skill">Figma</label>
              <progress id="design-skill" max="100" value="32"></progress>
            </li>
            <li>
              <label for="three-skill">Three Js</label>
              <progress id="three-skill" max="100" value="22"></progress>
            </li>
            <li>
              <div>Infrastructure / Hosting / DB</div>
              <p class="leading-8">
                <span class="rounded-xl bg-blue-300 px-3">Digital Ocean</span>
                <span class="rounded-xl bg-red-300 px-3">Caprover </span>
                <span class="rounded-xl bg-green-300 px-3">Redis</span>
                <span class="rounded-xl bg-gray-300 px-3">Rabbit MQ</span>
              </p>
            </li>
          </ul>
        </div>

        <div class="font-light text-lg px-2 mb-12">
          <h2 class="text-xl font-semibold mb-4">Education</h2>
          <h3 class="font-semibold">BSc Computer Science</h3>
          <p>2017-2021 Catholic University Of Eastern Africa</p>
        </div>

        <div class="font-light text-lg px-2 mb-12">
          <h2 class="text-xl font-semibold mb-4">Languages</h2>

          <ul class='marker:text-green list-outside list-disc ml-6'>
            <li>English - Fluent</li>
            <li>Swahili - Native</li>
            <li> Spanish - Intermediate</li>
          </ul>
        </div>
      </div>
      <div class="content w-full p-12">
        <div id="profile" class="prose">
          <div class="relative flex py-5 items-center">
            <div class="flex-grow border-t border-gray-400"></div>
            <span class="flex-shrink mx-4 text-gray-400 text-2xl">Profile</span>
            <div class="flex-grow border-t border-gray-400"></div>
          </div>
          <p class="font-light">
            Innovative, task driven developer with 3+ years of experience in web design and development
            across diverse industries.Knowledgeable in user interface, testing, and debugging processes.
            Bringing forth expertise in design, installation, testing and maintenance of web systems.
            Equipped with a diverse and promising skill set. Proficient in an assortment of technologies,
            including JavaScript,C#,PHP and MySQL.
          </p>

        </div>
        <div id="experience" class="prose">
          <div class="relative flex py-5 items-center">
            <div class="flex-grow border-t border-gray-400"></div>
            <span class="flex-shrink mx-4 text-gray-400 text-2xl">Work Experience</span>
            <div class="flex-grow border-t border-gray-400"></div>
          </div>
          <div>
            <h3 class="font-bold">Centrino Technologies Ltd. Nairobi/Kenya</h3>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                May.&nbsp;2021- Present
              </div>
              <div class="italic lg:inline-block lg:w-8/12 w-full">
                Backend Developer
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Tasks:
              </div>
              <div class="lg:inline-block lg:w-8/12 w-full font-light">
                <li class="text-black">
                  <ul class="text-white font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin convallis viverra.
                  </ul>
                </li>
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Tools:
              </div>
              <div class="lg:inline-block lg:w-8/12 w-full">
                <span class="rounded-xl bg-gray-300 px-3">Vue</span>
                <span class="rounded-xl bg-gray-300 px-3">Vuex</span>
                <span class="rounded-xl bg-gray-300 px-3">Bootstrap</span>
                <span class="rounded-xl bg-gray-300 px-3">Docker</span>
                <span class="rounded-xl bg-gray-300 px-3">Git</span>
                <span class="rounded-xl bg-gray-300 px-3">Bitbucket</span>
                <span class="rounded-xl bg-gray-300 px-3">Jira</span>
              </div>
            </section>
          </div>
        </div>
        <hr class="mt-8 mb-12" />
        <div id="projects" class="prose">
          <h2 class="section-headline">Projects</h2>
          <div class="mb-16">
            <h3 id="chrisko-headline">Chrisko.io</h3>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Personal blog:
              </div>
              <div class="lg:inline-block lg:w-8/12 w-full">
                My blog is the center of my online presence. Here, I share
                posts about what I've learnt, tutorials and my thoughts on web
                development in general.
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Deployed to:
              </div>
              <div class="lg:inline-block lg:w-8/12 w-full">
                <a
                  href="https://chrisko.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >chrisko.io</a
                >
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Code on:
              </div>
              <div class="lg:inline-block lg:w-8/12 w-full">
                <a
                  href="https://github.com/christiankozalla/nextjs-blog"
                  target="_blank"
                  rel="noopener noreferrer"
                >GitHub/nextjs-blog</a
                >
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Features:
              </div>
              <div class="lg:inline-block lg:w-8/12 w-full">
                <ul>
                  <li>Static generation</li>
                  <li>Blog content written in Markdown</li>
                  <li>Counter for pageviews and likes</li>
                  <li>My latest tweets</li>
                  <li>Featured images made with Inkscape</li>
                  <li>SEO</li>
                </ul>
              </div>
            </section>

            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Built with:
              </div>
              <div class="lg:inline-block lg:w-8/12 w-full">
                <span class="rounded-xl bg-gray-300 px-3">Next.js</span>
                <span class="rounded-xl bg-gray-300 px-3">CSS</span>
                <span class="rounded-xl bg-gray-300 px-3">styled-jsx</span>
                <span class="rounded-xl bg-gray-300 px-3">DynamoDB</span>
                <span class="rounded-xl bg-gray-300 px-3">Vercel</span>
              </div>
            </section>
          </div>
        </div>
        <hr class="mt-8 mb-12" />
        <div id="projects" class="prose">
          <h2 class="section-headline">Expand my skills</h2>
          <div class="mb-16">
            <h4 id="expand-knowledge-headline">
              I'd like to expand my skills and knowledge in several fields
            </h4>
            <ul>
              <li>TypeScript</li>
              <li>Testing, e.g. with Mocha, Chai, Jest</li>
              <li>Web Components, e.g. with StencilJS, LitElement</li>
              <li>Prototyping and Wireframing, e.g. with Figma, Adobe XD</li>
              <li>Scalable Vector Graphics</li>
              <li>Databases</li>
              <li>Mobile development</li>
              <li>
                Backend development, e.g. learn additional language like Go,
                Python, PHP, Ruby, Java, Rust
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
  </div>
</template>

<script>
export default {
  name: "Resume"
}
</script>

<style scoped>
html{
  font-family: 'Fredoka', sans-serif;
}
</style>
