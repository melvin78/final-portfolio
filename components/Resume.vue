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





        </div>
        <div class="content w-full p-12">
          <div class="prose">
            <div class="relative flex py-5 items-center">
              <div class="flex-grow border-t border-gray-400"></div>
              <span class="flex-shrink mx-4 text-2xl text-gray-800">Profile</span>
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
              <span class="flex-shrink mx-4 text-2xl text-gray-800">Work Experience</span>
              <div class="flex-grow border-t border-gray-400"></div>
            </div>
            <div>
              <h3 class="font-bold">Centrino Technologies Ltd. Nairobi/Kenya</h3>
              <section class="mb-6">
                <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  May.&nbsp;2021- Present
                </div>
                <div class="italic lg:inline-block lg:w-8/12 w-full">
                  FullStack Developer
                </div>
              </section>
              <section class="mb-6">
                <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Tasks:
                </div>
                <div class="lg:inline-block lg:w-8/12 w-full font-light">
                  <li>
                    <ul class="text-white font-light mt-1">
                      Maintain and update a management information system that handles financial transactions in micro-finance institutions(SACCOS)
                      running on .NET framework to .NET 6
                    </ul>
                  </li>
                  <li>
                  <ul class="text-white font-light  mt-1">
                    Migrate legacy codebase running on WCF Services to use REST and microservices architecture and message brokers with the help
                    of RabbitMQ that would ensure scalability and performance during high loads.
                  </ul>
                  </li>
                  <li>
                    <ul class="text-white font-light  mt-1">
                      Curate the re-designing of the System's UI that runs on Microsoft Silverlight to use current frontend web technologies(HTML,JavaScript and CSS)
                      with the help of frontend frameworks i.e Vue,Bootstrap
                    </ul>
                  </li>
                  <li>
                    <ul class="text-white font-light  mt-1">
                      Created the company's CRM solution that doubled as a support portal where clients would raise
                      issues or queries in form of tickets and assigned agents would respond and give solutions. The system would automatically
                      assign incoming tickets to agents,send email notifications on overdue tickets based on agreed SLA timelines and generate
                      monthly reports of all issues raised.
                    </ul>
                  </li>
                </div>
              </section>
              <section class="mb-6">
                <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Tools:
                </div>
                <div class="lg:inline-block lg:w-8/12 w-full">
                  <span class="rounded-xl bg-gray-50 px-3 text-black">Vue</span>
                  <span class="rounded-xl bg-gray-50 px-3 text-black">Vuex</span>
                  <span class="rounded-xl bg-gray-50 px-3 text-black">Bootstrap</span>
                  <span class="rounded-xl bg-gray-50 px-3 text-black">Docker</span>
                  <span class="rounded-xl bg-gray-50 px-3 text-black">Azure Devops</span>
                  <span class="rounded-xl bg-gray-50 px-3 text-black">RabbitMQ</span>
                  <span class="rounded-xl bg-gray-50 px-3 text-black">.NET 6</span>
                  <span class="rounded-xl bg-gray-50 px-3 text-black">MySQL</span>
                  <span class="rounded-xl bg-gray-50 px-3 text-black">Nuxt</span>
                  <span class="rounded-xl bg-gray-50 px-3 text-black">Vuetify</span>
                  <span class="rounded-xl bg-gray-50 px-3 text-black">Tailwind</span>
                </div>
              </section>
            </div>
            <div class="relative flex py-5 items-center">
              <div class="flex-grow border-t border-dashed border-2 border-gray-400"></div>

            </div>
            <div>
              <h3 class="font-bold">Huduma Centre City Square</h3>
              <section class="mb-6">
                <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Jan.&nbsp;2021- Apr. 2021
                </div>
                <div class="italic lg:inline-block lg:w-8/12 w-full">
                  Junior Developer
                </div>
              </section>
              <section class="mb-6">
                <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                  Tasks:
                </div>
                <div class="lg:inline-block lg:w-8/12 w-full font-light">
                  <li>
                    <ul class="text-white font-light  mt-1">
                      Helped maintain the SBA (Service By Appointment) system that was used by customers
                      before accessing any government services and facilitated training on how to
                      use the system. Server side language was written in PHP.
                    </ul>
                  </li>
                  <li>
                    <ul class="text-white font-light  mt-1">
                      Performed Biometric registration for customers who had lost their National Identification Cards.
                    </ul>
                  </li>
                </div>
              </section>
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
