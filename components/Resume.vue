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
          <h2 class="text-xl font-semibold mb-4">Skills</h2>

          <div class="font-light text-lg px-2 mb-12 container mx-auto">

            <div class=" flex justify-center grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2">
              <div id="javascript-chart"></div>
              <div id="php-chart"></div>
              <div id="csharp-chart"></div>
              <div id="vuejs-chart"></div>
              <div id="laravel-chart"></div>
              <div id="dotnet-chart"></div>
              <div id="html-chart"></div>
              <div id="css-chart"></div>
              <div id="mysql-chart"></div>

            </div>

          </div>

          <div class="font-light text-lg px-2 mb-12">
            <h2 class="text-xl font-semibold mb-4">Education</h2>
            <h3 class="font-semibold">BSc. Computer Science</h3>
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


          <div class="font-light text-lg px-2 mb-12">
            <h2 class="text-xl font-semibold mb-4">Hobbies and Interests</h2>
            <div class="flex items-center my-3">
              <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="XMLID_11_">
                  <path id="XMLID_1285_"
                        d="M32.198 5.83822L32.3556 5.671C32.7682 5.23344 33 4.63993 33 4.02115C33 3.40237 32.7682 2.80886 32.3556 2.3713L30.7642 0.683414C30.3346 0.227805 29.7716 0 29.2086 0C28.6456 0 28.0826 0.227805 27.6531 0.683414L27.4954 0.850631L26.8769 0.194594C26.6709 -0.0238771 26.3368 -0.0238771 26.1309 0.194594L25.3213 1.05324C25.1153 1.27171 25.1153 1.62598 25.3213 1.84445L25.9398 2.50048L24.6938 3.82205L24.0752 3.16601C23.8693 2.94754 23.5352 2.94754 23.3292 3.16601L22.5197 4.02465C22.3137 4.24312 22.3137 4.59739 22.5197 4.81586L23.1382 5.4719L18.5343 10.3548C17.8065 10.0964 17.0459 9.96305 16.278 9.96297C14.503 9.96289 12.8516 10.6774 11.6282 11.9749C11.1846 12.4455 10.8094 12.9806 10.513 13.5654C10.2262 14.1315 9.67082 14.4831 9.06364 14.4831L9.06092 15.6497C9.06004 15.6497 9.05916 15.6498 9.05828 15.6498L9.05836 14.4831C6.59729 14.483 4.31112 15.4702 2.62114 17.2626C1.71198 18.2269 1.02362 19.3664 0.575126 20.6497C0.14724 21.874 -0.0434212 23.1735 0.0082772 24.5123C0.112701 27.2144 1.19433 29.7886 3.05401 31.761C4.04031 32.8071 5.18281 33.6207 6.44975 34.1794C7.68465 34.7239 8.97535 35 10.2861 35C12.7474 35 15.0337 34.0127 16.7239 32.2201C18.4151 30.4265 19.3458 28.0001 19.3446 25.388C19.3443 24.7436 19.6758 24.1543 20.2098 23.8499C20.7612 23.5356 21.2657 23.1377 21.7094 22.6671C22.8141 21.4955 23.4821 19.9205 23.5905 18.2322C23.6527 17.2633 23.5287 16.2787 23.2349 15.3446L27.8409 10.4594L28.4595 11.1154C28.6655 11.3339 28.9995 11.3339 29.2055 11.1154L30.0151 10.2568C30.221 10.0383 30.221 9.68406 30.0151 9.46559L29.3965 8.80956L30.6426 7.48799L31.2611 8.14403C31.4671 8.3625 31.8011 8.3625 32.0071 8.14403L32.8167 7.28539C33.0227 7.06692 33.0227 6.71265 32.8167 6.49418L32.198 5.83822ZM20.5899 14.8501C21.7992 16.8364 21.6745 19.4042 20.1537 21.0172C19.8561 21.3328 19.524 21.5918 19.1683 21.7946C17.9225 22.5047 17.1438 23.8891 17.1446 25.389C17.1455 27.3033 16.492 29.1663 15.1682 30.5703C13.845 31.9737 12.09 32.6668 10.2859 32.6668C8.27753 32.6668 6.20842 31.8072 4.60944 30.1113C1.57419 26.892 1.38037 21.8782 4.17656 18.9125C5.49953 17.5094 7.25441 16.8164 9.05814 16.8164C9.05924 16.8164 9.06063 16.8164 9.06173 16.8164C9.06239 16.8164 9.0629 16.8164 9.06356 16.8164C10.4786 16.8164 11.7809 15.992 12.4508 14.67C12.642 14.2927 12.8862 13.9405 13.1837 13.6249C14.0224 12.7354 15.1346 12.2962 16.2779 12.2962C17.2078 12.2963 18.1584 12.587 18.9985 13.1623L29.2086 2.33327L30.8 4.02115L20.5899 14.8501Z"
                        fill="black"/>
                  <path id="XMLID_1322_"
                        d="M14.934 15.3511C13.9745 15.3511 13.0724 15.7473 12.394 16.467C11.7155 17.1866 11.3418 18.1433 11.3418 19.161C11.3418 20.1787 11.7154 21.1354 12.394 21.855C13.0724 22.5746 13.9745 22.9708 14.934 22.9708C15.8935 22.9708 16.7956 22.5746 17.474 21.855C18.1525 21.1354 18.5261 20.1787 18.5261 19.161C18.5261 18.1433 18.1525 17.1866 17.474 16.467C16.7956 15.7474 15.8935 15.3511 14.934 15.3511ZM15.9184 20.205C15.6466 20.4934 15.2902 20.6376 14.9339 20.6376C14.5776 20.6376 14.2213 20.4934 13.9494 20.205C13.4058 19.6284 13.4058 18.6935 13.9494 18.1168C14.2213 17.8285 14.5776 17.6843 14.9339 17.6843C15.2902 17.6843 15.6466 17.8285 15.9184 18.1168C16.4621 18.6935 16.4621 19.6284 15.9184 20.205Z"
                        fill="black"/>
                  <path id="XMLID_1323_"
                        d="M6.26896 24.6816L9.72872 28.3511C10.1583 28.8067 10.8547 28.8067 11.2843 28.3511C11.7139 27.8955 11.7139 27.1568 11.2843 26.7012L7.82453 23.0318C7.39496 22.5762 6.69853 22.5762 6.26896 23.0318C5.83938 23.4874 5.83938 24.226 6.26896 24.6816Z"
                        fill="black"/>
                </g>
              </svg>
              <div class="ml-2">Playing Guitar</div>
            </div>


            <div class="flex items-center my-3">
              <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group">
                  <path id="Vector"
                        d="M7.09468 31C11.013 31 14.1895 29.2574 14.1895 27.1089C14.1895 27.0486 14.1771 26.989 14.1738 26.9294L14.1895 26.9279L13.373 5.19021H26.3179C26.3474 5.47075 26.3803 5.7738 26.4167 6.09967C26.7807 9.46617 27.4181 15.359 27.2938 23.4673C26.5209 23.307 25.6858 23.2157 24.8108 23.2157C20.8938 23.2157 17.7164 24.9587 17.7164 27.1088C17.7164 29.2573 20.8938 30.9999 24.8108 30.9999C28.7291 30.9999 31.9065 29.2573 31.9065 27.1088C31.9065 27.0146 31.8922 26.9221 31.881 26.8303C32.2915 16.5499 31.5422 9.45256 31.1131 5.488C31.0326 4.74837 30.9657 4.13229 30.9241 3.64224C30.748 1.6002 29.1397 0 27.2609 0H12.2246C10.3253 0 8.73311 1.62828 8.59886 3.70655L8.58908 3.85022L9.31331 23.4134C8.61467 23.2878 7.8707 23.2157 7.09521 23.2157C3.17719 23.2158 1.15225e-07 24.9588 1.15225e-07 27.1089C-0.00069861 29.2574 3.17649 31 7.09468 31Z"
                        fill="black"/>
                </g>
              </svg>
              <div class="ml-2">Music</div>
            </div>

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
                  <li>
                    <ul class="text-white font-light">
                      Migrate legacy codebase running on Microsoft WCF Services to work with REST architecture

                    </ul>
                    <ul class="text-white font-light">
                      Maintain and update Management Information System that handles
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
          <hr class="mt-8 mb-12"/>
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
          <hr class="mt-8 mb-12"/>
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
import ApexCharts from 'apexcharts'


export default {
  name: "Resume",

  mounted() {
    const Javascript = {
      series: [83],
      chart: {
        height: 100,
        width:100,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: '60%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            show: true,
            name: {
              show: true,
              color:"",
              fontSize: '7px'
            },
            value: {
              formatter: function(val) {
                return parseInt(val);
              },

              show: false,
            }
          }
        }
      },
      fill: {
        type: 'solid',
        colors:['#fcff33'],

      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Javascript'],
    };

    const _javascriptChart = new ApexCharts(document.querySelector("#javascript-chart"), Javascript);
    _javascriptChart.render();

    const php = {
      series: [90],
      chart: {
        height: 100,
        width:100,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: '60%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            show: true,
            name: {
              show: true,
              fontSize: '10px',
              color:""
            },
            value: {
              formatter: function(val) {
                return parseInt(val);
              },

              show: false,
            }
          }
        }
      },
      fill: {
        type: 'solid',
        colors:['#33ceff'],

      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['PHP'],
    };

    const _phpChart = new ApexCharts(document.querySelector("#php-chart"), php);
    _phpChart.render();

    const csharp = {
      series: [80],
      chart: {
        height: 100,
        width:100,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: '60%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            show: true,
            name: {
              show: true,
              fontSize: '10px',
              color:""
            },
            value: {
              formatter: function(val) {
                return parseInt(val);
              },

              show: false,
            }
          }
        }
      },
      fill: {
        type: 'solid',
        colors:['#f033ff'],

      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['C#'],
    };

    const _csharpChart = new ApexCharts(document.querySelector("#csharp-chart"), csharp);
    _csharpChart.render();

    const vuejs = {
      series: [78],
      chart: {
        height: 100,
        width:100,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: '60%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            show: true,
            name: {
              show: true,
              fontSize: '10px',
              color:""
            },
            value: {
              formatter: function(val) {
                return parseInt(val);
              },

              show: false,
            }
          }
        }
      },
      fill: {
        type: 'solid',
        colors:['#33ff46'],

      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Vue Js'],
    };

    const _vuejsChart = new ApexCharts(document.querySelector("#vuejs-chart"), vuejs);
    _vuejsChart.render();

    const laravel = {
      series: [81],
      chart: {
        height: 100,
        width:100,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: '60%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            show: true,
            name: {
              show: true,
              fontSize: '10px',
              color:""
            },
            value: {
              formatter: function(val) {
                return parseInt(val);
              },

              show: false,
            }
          }
        }
      },
      fill: {
        type: 'solid',
        colors:['#e30808'],

      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Laravel'],
    };

    const _laravelChart = new ApexCharts(document.querySelector("#laravel-chart"), laravel);
    _laravelChart.render();

    const dotnet = {
      series: [72],
      chart: {
        height: 100,
        width:100,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: '60%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            show: true,
            name: {
              show: true,
              fontSize: '10px',
              color:""
            },
            value: {
              formatter: function(val) {
                return parseInt(val);
              },

              show: false,
            }
          }
        }
      },
      fill: {
        type: 'solid',
        colors:['#b808e3'],

      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['.NET'],
    };

    const _dotnetChart = new ApexCharts(document.querySelector("#dotnet-chart"), dotnet);
    _dotnetChart.render();

    const html = {
      series: [98],
      chart: {
        height: 100,
        width:100,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: '60%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            show: true,
            name: {
              show: true,
              fontSize: '10px',
              color:""
            },
            value: {
              formatter: function(val) {
                return parseInt(val);
              },

              show: false,
            }
          }
        }
      },
      fill: {
        type: 'solid',
        colors:['#e37208'],

      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['HTML'],
    };

    const _htmlChart = new ApexCharts(document.querySelector("#html-chart"), html);
    _htmlChart.render();

    const css = {
      series: [90],
      chart: {
        height: 100,
        width:100,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: '60%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            show: true,
            name: {
              show: true,
              fontSize: '10px',
              color:""
            },
            value: {
              formatter: function(val) {
                return parseInt(val);
              },

              show: false,
            }
          }
        }
      },
      fill: {
        type: 'solid',
        colors:['#084ae3'],

      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['CSS'],
    };

    const _cssChart = new ApexCharts(document.querySelector("#css-chart"), css);
    _cssChart.render();

    const mysql = {
      series: [90],
      chart: {
        height: 100,
        width:100,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: '60%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            show: true,
            name: {
              show: true,
              fontSize: '10px',
              color:""
            },
            value: {
              formatter: function(val) {
                return parseInt(val);
              },

              show: false,
            }
          }
        }
      },
      fill: {
        type: 'solid',
        colors:['#e3c208'],

      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['MYSQL'],
    };
    const _mysqlChart  = new ApexCharts(document.querySelector("#mysql-chart"), mysql);
    _mysqlChart.render();



  }
}
</script>

<style scoped>
html {
  font-family: 'Fredoka', sans-serif;
}
</style>
