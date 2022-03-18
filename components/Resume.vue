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

            <div class=" flex justify-center grid grid-cols-2 gap-2">
              <div class="mb-1 text-base font-medium">C#</div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-blue-700 h-2.5 rounded-full" style="width: 75%"></div>
              </div>

              <div class="mb-1 text-base font-medium ">PHP</div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-blue-600 h-2.5 rounded-full" style="width: 80%"></div>
              </div>

              <div class="mb-1 text-base font-medium ">JavaScript</div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-blue-700 h-2.5 rounded-full" style="width: 73%"></div>
              </div>

              <div class="mb-1 text-base font-medium ">MySQL</div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-blue-600 h-2.5 rounded-full" style="width: 91%"></div>
              </div>

              <div class="mb-1 text-base font-medium ">Python</div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-blue-700 h-2.5 rounded-full" style="width: 55%"></div>
              </div>

              <div class="mb-1 text-base font-medium ">CSS</div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-blue-600 h-2.5 rounded-full" style="width: 65%"></div>
              </div>

              <div class="mb-1 text-base font-medium">HTML</div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-blue-700 h-2.5 rounded-full" style="width: 95%"></div>
              </div>


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
                    Migrate legacy codebase running on WCF Services to use REST and microservices architecture with the help of message brokers
                   that would ensure scalability and performance during high loads.
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
                  <span class="rounded-xl bg-blue-300 px-3 text-black">Vue</span>
                  <span class="rounded-xl bg-blue-300 px-3 text-black">Docker</span>
                  <span class="rounded-xl bg-blue-300 px-3 text-black">Azure DevOps</span>
                  <span class="rounded-xl bg-blue-300 px-3 text-black">RabbitMQ</span>
                  <span class="rounded-xl bg-blue-300 px-3 text-black">.NET 6</span>
                  <span class="rounded-xl bg-blue-300 px-3 text-black">MySQL</span>
                  <span class="rounded-xl bg-blue-300 px-3 text-black">Vuetify</span>
                  <span class="rounded-xl bg-blue-300 px-3 text-black">Tailwind</span>
                  <span class="rounded-xl bg-blue-300 px-3 text-black">.NET Core</span>
                  <span class="rounded-xl bg-blue-300 px-3 text-black">OIDC</span>
                  <span class="rounded-xl bg-blue-300 px-3 text-black">xUNIT</span>
                  <span class="rounded-xl bg-blue-300 px-3 text-black">JetBrains Rider</span>
                  <span class="rounded-xl bg-blue-300 px-3 text-black">ReSharper</span>
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




  },
  methods:{

}

}
</script>

<style scoped>
html {
  font-family: 'Fredoka', sans-serif;
}

</style>
