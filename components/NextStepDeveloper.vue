<template>
  <div>
    <HeaderNav/>
    <main class="max-w-7xl  mx-auto overflow-hidden  shadow-2xl bg-gray-50">
      <img alt="Article" class="object-cover w-full h-96" src="/important/next-step.jpg">

      <div class="p-6 text-black ">
        <div>
          <span class="text-xs font-bold text-blue-600 uppercase dark:text-blue-400">25 JANUARY 2022</span>
          <br/>
          <span class="text-xs text-blue-600 uppercase dark:text-blue-400">5 MIN READ</span>

          <a class="block mt-2 text-5xl font-semibold" href="#">Steps to becoming a better developer</a>
          <p class="mt-2 text-black leading-relaxed text-justify ">
            You might be now wondering,What is the next step?
            This is a follow up of my previous article , if you haven't read it you can read it
            <a class="underline hover:text-blue-400" @click="$router.push('/blog/life-as-a-junior-developer')">here</a>
            Now that you are finally accustomed with the basics (hopefully you didn't get lost) i can share my thoughts
            on what's next.
            Basically what is required of you to finally go to the next level from junior dev to senior junior or senior
            senior.
            I am still sharing my experience so these are completely my opinions and what i have read from other source
            materials and articles.
          </p>

          <div class="font-semibold text-4xl mt-2">Patterns,Patterns,Patterns</div>

          <p class="mt-3  leading-relaxed text-justify ">
            To be precise design patterns that help structure our code. Clear concise code means easy refactoring and
            maintainability, and code that is easily refactorable translates to improved developer experience. No one
            wants to work with spaghetti code. Working with spaghetti code is like trying to defuse a bomb, where if you
            cut the wrong wire the bomb detonates. Such code if you wish to add a feature you are not even sure
            of where to start,change the wrong variable or modify the wrong function and
            your program is no longer running. That's why we have design patterns they help us organize our code in such
            a way that if any developer was to
            join the team and look at our codebase at a glance he/she would be able to have a sense of what's
            happening.<br/>
            I love using analogies to explain some of the concepts for easier understanding. So here is one, to maybe
            give more context.
          </p>



          <p class="mt-2  leading-relaxed text-justify ">
            <bdi class="font-extrabold">Scenario 1</bdi><br>
          <div class="flex justify-center mt-3 mb-3">
            <img class="object-fill h-96 " src="/important/pile-of-clothes.jpg">
          </div>
            We all have that one chair in our room where we keep clothes that are neither dirty nor clean. Whenever you
            are leaving the house in a hurry you go to the chair and start searching frantically for a shirt or
            something to wear. Since there is no order in which they arranged they were just dumped on the chair, you
            will be struggling to find that blue polo shirt that you like.Consequentially you will be late for that meeting or that meetup
            with your friend.
            <br>

          <p class="mt-2  leading-relaxed text-justify">
          <bdi class="font-extrabold">Scenario 2</bdi><br>
          <div class="flex justify-center mt-3 mb-3">
            <img class="object-fill h-96 " src="/important/wardrobe-clothes.jpg">
          </div>
          What if you now decided to get rid of that bad habit and get rid of that chair so that you can stop dumping clothes on it(<i>i know hard right</i>).
            So you decide i will arrange all my clothes in a wardrobe categorically, if its shoes i will place them on the lower compartment. Coats will
            be neatly hanged on the rails, each sock will be tied closely with its' pair no more struggling every morning before going
            to work,to find where the other pair of you sock is. With this method of arranging your clothes it means that you can easily send your
            friend or family to get you your blue polo shirt from your room, without even giving them prior knowledge of where to find it. Since everything
            has been arranged neatly and in an orderly fashion




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
export default {
  name: "NextStepDeveloper",
  head() {
    return {
      title: 'Blog | Steps To Becoming a Better Developer'
    }
  }
}
</script>

<style scoped>

</style>
