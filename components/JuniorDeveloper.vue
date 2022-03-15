<template>
  <div>
    <HeaderNav/>
    <main class="max-w-6xl text-white mx-auto overflow-hidden  shadow-2xl ">
      <img class="object-cover w-full h-96" src="/important/junior-dev.jpg" alt="Article">

      <div class="p-6 text-white">
        <div>
          <span class="text-xs font-light text-blue-600 uppercase dark:text-blue-400">20 JANUARY 2022</span>
          <a href="#" class="block mt-2 text-4xl font-semibold  text-white">Life As A Junior Developer</a>
          <p class="mt-2 text-white font-light leading-relaxed text-justify ">
            Everyone passes through this stage no matter the speciality at one point you were a junior,a temp somewhere
            or intern. Before you become a dentist or even perform a surgery you will first have to learn or see someone
            do it. Last time i visited the dentist to get my wisdom tooth removed there was someone beside him who
            would pass the surgical equipments to the dentist as the dentist was mercilessly trying to pry out my
            impacted tooth. Its safe to assume he was the junior.
            An aspiring blacksmith will look
            at how the experience one is working and at what temperature is the iron being smelted before its casted. A
            master chef will show his kitchen staff how to prepare a dish. Letting them know all the ingredients
            required, the right amount
            of cooking heat required to cook a well done, rare, or medium rare dish if its meat/lamb was being
            cooked. I hope you can see where am going with this.


          </p>
          <div class="flex justify-center mt-3 pb-3">
            <img src="https://media.giphy.com/media/xT0xeHBBKysIbqxRcc/giphy.gif">

          </div>
          <p class="mt-3 text-white font-light leading-relaxed text-justify ">
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
            won't cross the road with you to the other side that's all up to you. So take initiative and soak up whatever
            you learn.
          </p>

          <p class="mt-2 text-white font-light leading-relaxed text-justify ">
            Take the intitiative first and try to solve the problem do a little research, do a stack overflow search see
            what results come up copy paste it and see if it works. There's nothing wrong with copying someone's else
            code, the only issue comes when you are copying it blindly and you don't understand what the code does.
            <br>
            Unpopular opinion here, the best solution you are always looking for on stack overflow isn't always the
            first one
            marked as an answer or the one that is highly upvoted. It's usually the second or third one or the one you usually
            find in the comment section.</p>

          <div class="flex justify-center mt-2">
            <img src="https://media.giphy.com/media/kGCuRgmbnO9EI/giphy.gif">

          </div>
          <p class="mt-2 text-white font-light leading-relaxed text-justify">
            So keep scrolling see what others are saying after they tried out that solution, did it
            work? or is it no longer working after all, that answer might not apply to the version of framework or
            language you are using right
            now. That question might have been asked over 11 years ago and 11 years is enough time for a language to
            change drastically in terms of code syntax and performance.
            PHP is a very good example, there's a very big difference and i mean very big difference between PHP version 5 and current
            version 8. Languages evolve overtime, javascript is another example with the introduction of ES6 standards and typescript.
            So before you copy that marked answer on stack overflow assess and look at other solutions offered.</p>

          <p class="mt-2 text-white font-light leading-relaxed text-justify">
            One thing that most junior dev struggle with, is they are afraid to ask questions ashamed that they are
            asking very easy questions. Trust me have been there you later come to realize if you don't ask there's no
            progress you are going to make. My first dev job was a nightmare where every day I thought for sure "today
            they'll realize I know nothing and fire me". My advice is to remember to push past those feelings. When you
            don't know what to do it feels bad. But once you get into the code and ask a few questions eventually you'll
            complete the task and learn more and more.<br>

            <p class="mt-2 text-white font-light leading-relaxed text-justify">
          I remember my first job was as a C# developer , i was coming from a PHP background , from dynamically typed
          to statically typed. For those who don't know the difference a statically typed language is where evey
          detail about the variables and all the data types must be known before we do the compiling process while
          type checking takes place while the program is running (run-time) . In this type of language, there is no
          need to specify the data type of each variable while writing code.
        </p>


          <p class="mt-2 text-white font-light leading-relaxed text-justify">
            I know you might be wondering what are these types and data types. Without going so much into the technical bit which will now be
            another broad topic,
            data types or types are like the SI units
            of the computer world. If you ever attended a physics or Math class we are usually told to write the units
            after your answer. If it's a unit of distance you would use metres or kilometers <i>(sorry my American
            friends)</i> , time you would seconds,minutes or hours and temperature you would use degrees <i>(again sorry my
            American friends)</i>.
            <br>
            With the same analogy think of your teacher or the one marking your answer as the
            compiler and your answer as the type or data type. So if i give my answer without writing the units then my
            teacher is forced to figure out in what units my answer is in while he/she is marking my paper. In a
            nutshell that's how dynamically typed languages behave. You just declare a variable without saying its of
            what type 'its SI unit' and let the compiler 'the teacher' figure that out during runtime 'when marking your answer sheet'.<br>
            Now for statically typed the teacher 'compiler' decides and says i won't mark any answer that doesn't show the
            units. So even before your code is compiled an error is thrown. There's still a debate on which language one
            should use, each has it's own pro's and cons more on that later.

          </p>
        </div>

      </div>
    </main>

  </div>


</template>

<script>
export default {
  name: "JuniorDeveloper"
}
</script>

<style scoped>

</style>
