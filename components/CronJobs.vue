<template>
  <div>
    <HeaderNav/>
    <main class="max-w-6xl  mx-auto overflow-hidden  shadow-2xl bg-gray-50">
      <img alt="Article" class="object-cover w-full h-96" src="/cronjob.png">

      <div class="p-6 text-black ">
        <div>
          <span class="text-xs font-bold text-blue-600 uppercase dark:text-blue-400">10 JANUARY 2022</span>
          <br/>
          <span class="text-xs text-blue-600 uppercase dark:text-blue-400">6 MIN READ</span>

          <a class="block mt-2 text-5xl font-semibold" href="#">Creating automated tasks in .NET</a>
          <p class="mt-2 text-black leading-relaxed text-justify ">
            Today, will share one of my code snippet that i wrote, was very proud of
            it i was even thinking of taking a screenshot,frame it and hang it on my bedroom wall. This was way back
            while i was still
            getting my feet wet with C#
            In this post will talk about how we can configure our application to run automated background tasks
            at a specific time of the day or after some defined intervals.
          </p>
          <div class="font-semibold text-4xl mt-2">The Problem</div>
          <p class="mb-3 indent-1">I will use the ticket CRM solution that i built as an example.You can find the
            demo and source code <a class="text-blue-300 hover:text-blue-400" href="">here.</a>
            The project is ideally a ticket support system. The usual stuff that happens
            in a helpdesk solution. Google's definition of a helpdesk solution:<br><br>
            <span class="italic">
              Help desk software is a tool that serves a wide range of customer support activities.
              You can organize messages, give assistance, and exchange information with customers
              at a single point of contact.
              The help desk uses tickets for communication —
              that's why it's also known as a ticketing system.
            </span>
            <br><br>
            From the definition it means for every customer query that is raised, a ticket number is
            automatically assigned by the system. This ticket number is what is used to track the status
            of the customer's query from when it was created,assigned,transferred,resolved and marked
            as closed.
            <br>There are five ticket statuses:<br/><br>
            <span class="font-bold ml-5">Created/New:</span>
            <span>This is a ticket that has just come in and no agent has been assigned to it</span>
            <br><br>
            <span class="font-bold ml-5">Assigned:</span>
            <span>This is a ticket that has been assigned to an agent and is working on
            resolving the issue</span><br><br>
            <span class="font-bold ml-5">Transferred:</span>
            <span>This is a ticket that has been transferred to an agent if the previously assigned agent
            is unable to resolve the query</span><br><br>
            <span class="font-bold ml-5">Resolved:</span>
            <span>This is a ticket that has been resolved by the agent and the issue is no longer
            occuring</span><br><br>
            <span class="font-bold ml-5">Closed:</span>
            <span>This is a ticket that has been closed by the agent and the customer has also given the
            feedback that the problem has actually been solved</span><br><br>



            <br>
            <span class="font-extrabold mt-3">Problem 1</span><br>
            <p class="inset-1.5">
           We need to come up with a way that if a new ticket comes in, its automatically assigned to an
           agent by the system.The ticket status changes to assigned and an email is sent automatically
          to the agent to notify that a ticket has been assigned to him/her. We also have to set it in
          such a way that tickets are equally shared amongst the agents. If there are 20 new tickets and there
          are five agents available the system will assign each agent four tickets and send an email
          notification to these agents.
          Everything has to happen as a background task(Cron Job)
        </p>
          <span class="font-extrabold mt-3">Problem 2</span><br>
          <p class="inset-1.5">
            We need to mark a ticket as overdue if its not resolved within a specified timeline, could be
            after 24 hours, 3 days or even after a week, so it varies with the enquiry.So each enquiry has its own agreed timeline set,so
            that if after a certain period of time passes and it hasn't been marked as resolved,the ticket
            status changes to overdue. The system should also send subsequent emails to the agent and tell him that there's a ticket
            that has been marked as overdue and require attention.Again,all these should happen as a background task (Cron Job).
          </p>




          <div class="font-semibold text-4xl mt-2">The Solution</div>

          I will share small code snippets on how to solve both problem 1 and 2. Will also give explanation of what
          the code does.<br><br>

          <span class="font-bold">Solving problem 1</span>

          <SnippetOne/>

          <p class="mt-3  leading-relaxed text-justify ">
            Basically all these skills in order to better master them, apprenticeship is the way to go. As a developer
            who is just starting out the same applies. Learn and see what your senior is doing and implement it, let it
            be part of your repertoire. Don't ever be afraid of asking questions if you are not sure of something. How
            else are you supposed to learn? Not sure how to initialize a git repository ask away , finding difficulty
            merging a feature branch to the master branch ask for assistance. If your senior is a good enough
            human being he will do the necessary.<br/>
            Also don't let it be that in the slightest inconvenience or where you
            don't understand something you are always asking for help.The senior is there to guide you and not hold your
            hand all the way through. He/She is meant to hold your hands at the traffic light stop and let go of your
            hand once
            the pedestrian light turns green and tells you to cross. He is there to guide you and lead the way he/she
            won't cross the road with you to the other side that's all up to you. So take initiative and soak up
            whatever
            you learn.
          </p>

          <p class="mt-2  leading-relaxed text-justify ">
            Take the intitiative first and try to solve the problem do a little research, do a stack overflow search see
            what results come up copy paste it and see if it works. There's nothing wrong with copying someone's else
            code, the only issue comes when you are copying it blindly and you don't understand what the code does.
            <br>
            Unpopular opinion here, the best solution you are always looking for on stack overflow isn't always the
            first one
            marked as an answer or the one that is highly upvoted. It's usually the second or third one or the one you
            usually
            find in the comment section.</p>

          <div class="flex justify-center mt-2">
            <img src="https://media.giphy.com/media/kGCuRgmbnO9EI/giphy.gif">

          </div>
          <p class="mt-2  leading-relaxed text-justify">
            So keep scrolling see what others are saying after they tried out that solution, did it
            work? or is it no longer working after all, that answer might not apply to the version of framework or
            language you are using right
            now. That question might have been asked over 11 years ago and 11 years is enough time for a language to
            change drastically in terms of code syntax and performance.
            PHP is a very good example, there's a very big difference and i mean very big difference between PHP version
            5 and current
            version 8. Languages evolve overtime, javascript is another example with the introduction of ES6 standards
            and typescript.
            So before you copy that marked answer on stack overflow assess and look at other solutions offered.</p>

          <p class="mt-2  leading-relaxed text-justify">
            One thing that most junior dev struggle with, is they are afraid to ask questions ashamed that they are
            asking very easy questions. Trust me have been there you later come to realize if you don't ask there's no
            progress you are going to make.<br>

          <div class="font-semibold text-4xl mt-2">My Experience</div>
          <p class="mt-2  leading-relaxed text-justify">
            My first dev job was a nightmare where every day I thought for sure "today
            they'll realize I know nothing and fire me". The codebase was large, it was one big monolithic solution
            having almost 100+ projects.
            At first it felt like i didn't know anything because it was layers on top of layers on top of layers. I
            would open one class file, look
            at the code and my brain couldn't just interpret what was happening.</p>

          <div class="flex justify-center mt-2">
            <img src="https://media.giphy.com/media/VB5WwlZIt8eRy/giphy.gif">
          </div>
          <p class="mt-2  leading-relaxed text-justify">
            Dont get me wrong the codebase had clear architectural design and had implemented most of the common design
            patterns and was self documenting.
            My problem was i wasn't just approaching it with the right mentality .My advice is to remember to push past
            those feelings. When you
            don't know what to do it feels bad,but once you get into the code and ask a few questions eventually you'll
            complete the task and learn more and more.
            I had trouble catching up since i
            had to now declare types before declaring variables,classes or functions. <code>"Cannot convert type 'int'
            to
            type 'string' </code>" error
            messages was all i could see when i closed my eyes. This was because i was coming from a PHP background ,
            from dynamically typed
            to statically typed.If you don't know the difference, a statically typed language is where every
            detail about the variables and all the data types must be known before we do the compiling process, while in
            statically typed languages
            type checking takes place while the program is running (run-time) . In this type of language, there is no
            need to specify the data type of each variable while writing code.
          </p>


          <p class="mt-2  leading-relaxed text-justify">
            I know you might be wondering what are these types and data types. I will try my best to explain with an
            analogy without getting so much into the
            technical bit of performance and developer experience.<br/>
            Data types or types are like the SI units of your code. If you ever attended a physics or math
            class your lecturer will tell you to write the units
            after your answer after every calculation you do. If it's a unit of distance you would use metres or
            kilometers (sorry my American
            friends its not miles), time you would use seconds,minutes or hours and temperature you would use degrees
            celsius (again
            sorry my
            American friends its not fahrenheit).
            <br>
            With the same analogy think of your lecturer or the one marking your answer as the
            compiler and your answer as the type or data type. So if i give my answer without writing the units then my
            lecturer is forced to figure out in what units my answer is, while he/she is marking my answer sheet. In a
            nutshell that's how dynamically typed languages behave. You just declare a variable without saying its of
            what type "its SI unit" and let the compiler "the lecturer" figure that out during runtime "when marking
            your
            answer sheet".<br>
            Now for statically typed the lecturer "compiler" decides and says i won't mark any answer that doesn't
            indicate in what units the answer is
            . So even before your code is compiled an error is thrown. Wanna learn more here is a couple of <a
            class="underline hover:text-blue-400"
            href="https://stackoverflow.com/questions/1517582/what-is-the-difference-between-statically-typed-and-dynamically-typed-languages"
            target="_blank">
            answers
          </a> on stackoverflow about the topic (Remember my advice when it comes to using stack overflow!)<br/>

            Fast forward to one and a half years later i was able to contribute to the project fully and even add new
            features to the codebase.
            The time it took me to write a piece of code without running into issues also reduced. It was all coming
            together.As long as you are ready to devote your spare time into learning the basics of the language
            and asking questions where you are not sure you will be good at your job within no time.

          </p>

          <div class="font-semibold text-4xl mt-2">Overcoming the challenges</div>

          <div class="flex justify-center mt-5 mb-5">
            <div class="max-w-4xl p-4 text-gray-800 bg-white rounded-lg shadow-lg ">
              <div class="mb-2">
                <div class="h-3 text-3xl text-left text-gray-600">“</div>
                <p class="px-4 text-sm text-center text-gray-600">
                  I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick
                  10,000 times
                </p>
                <div class="h-3 text-3xl text-right text-gray-600">”</div>
                <div class="flex justify-end">
                  <div class="text-sm font-light italic mt-2">Bruce Lee</div>
                </div>
              </div>
            </div>

          </div>
          <p class="leading-relaxed text-justify mt-2">
            Once i was able to change my mentality it was all free flow. One thing you should realize about learning how
            to code,
            its just like learning a new linguistic language or learning how to play a musical instrument,it requires
            constant practice and dedication.
            Not to brag but i am also a professional guitarist and a pretty good one actually. Thats what
            i usually do with most of my spare time. In order to master such a skill you need to know the
            fundamentals of music, what a note is, what music
            scales are and even train yourself to develop some sort of relative pitch to be able to detect music notes
            purely
            by ear.<br/>
            In learning a linguistic language such as English, you need to understand the basics of the language, what
            is a noun,adjective and how to structure them in order to constuct
            a sentence. If you start practicing on your pronunciations you will soon be able to speak fluently<br/>

            Learning how to program is no exception. It first starts by learning the basics, what is a method ? a
            variable ? what is a class
            when you are in the context of OOP,because no matter the programming language this concepts are the same.
            The only thing that
            changes is the syntax, different programming languages will have different ways of defining a method or
            variable. So before you actually master a programming language you will have to understand the basics of
            programming. Basically
            it requires dedication and practice in order to master the
            skill.Thus the quote above, there are so many programming languages
            out there. New frameworks(JavaScript being one of the main culprits) are sprouting faster than mushrooms
            growing on a dead tree stump.
            If you tell yourself that i want to learn all these languages/frameworks you will burn out very fast. The so
            called giant tech companies
            FAANG ( Facebook,Amazon,Apple,Netflix and Google) dont usually care what programming language you are good
            at, what they care about is
            do you understand the fundamentals of programming i.e data structures and how to solve problems with the
            help of algorithms.
            Once you master one programming language (practice one kick 10,000 times) instead of learning so many at
            once (practice 10000
            different kicks at once) you will be able to grow as a developer. In the music world we have a saying you
            have to practice 40 hours a day if you are to master or learn on how to play a musical piece.
          </p>
          <div class="font-semibold text-4xl mt-2 mb-2">Conclusion</div>
          <p class="mb-5">
            This has been my two cents on how the experience was when i was starting out as a developer, it might or
            might not apply
            to your situation but this is how i managed. So before you think of giving up try following
            these steps and everything little thing is gonna be alright
            <bdi class="text-sm font-extralight ">* insert Bob Marley voice from three little birds *</bdi>
            . I will share more tips on how to even better improve your skills on the next one.

          </p>

          <div class="relative flex py-5 items-center">
            <div class="flex-grow border-t border-gray-400"></div>
            <span class="flex-shrink mx-4 text-2xl text-gray-800"></span>
            <div class="flex-grow border-t border-gray-400"></div>
          </div>

        </div>

        <ShareComponent/>


      </div>
    </main>

  </div>
</template>

<script>
import SnippetOne from "@/components/snippets/SnippetOne";
export default {
  name: "CronJobs",
  components:{SnippetOne}
}
</script>

<style scoped>

</style>
