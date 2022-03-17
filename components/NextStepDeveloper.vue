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

          <div class="font-semibold text-4xl mt-2 break-words">Patterns,Patterns,Patterns</div>

          <p class="mt-3  leading-relaxed text-justify ">
            To be precise design patterns that help structure our code. Clear concise code means easy refactoring and
            maintainability, and code that is easily refactorable translates to improved developer experience. No one
            wants to work with spaghetti code. Working with spaghetti code is like trying to defuse a bomb, where if you
            cut the wrong wire the bomb detonates. Such a code if you wish to add a feature you are not even sure
            of where to start,change the wrong variable or modify the wrong function and
            your program is no longer running. That's why we have design patterns they help us organize our code in such
            a way that if any developer was to
            join the team and look at our codebase at a glance he/she would be able to have a sense of what's
            happening.<br/>
            I love using analogies to explain some of the concepts for easier understanding. So here is one, to maybe
            give more context.
          </p>


          <p class="mt-2  leading-relaxed text-justify ">
            <bdi class="font-extrabold">Scenario 1</bdi>
            <br>
          <div class="flex justify-center mt-3 mb-3">
            <img class="object-fill h-96 " src="/important/pile-of-clothes.jpg">
          </div>
          We all have that one chair in our room where we keep clothes that are neither dirty nor clean. Whenever you
          are leaving the house in a hurry you go to the chair and start searching frantically for a shirt or
          something to wear. Since there is no order in which they arranged they were just dumped on the chair, you
          will be struggling to find that blue polo shirt that you like.Consequentially you will be late for that
          meeting or that meetup
          with your friend.
          <br>

          <p class="mt-2  leading-relaxed text-justify">
            <bdi class="font-extrabold">Scenario 2</bdi>
            <br>
          <div class="flex justify-center mt-3 mb-3">
            <img class="object-fill h-96 " src="/important/wardrobe-clothes.jpg">
          </div>
          What if you now decided to get rid of that bad habit and get rid of that chair so that you can stop dumping
          clothes on it(<i>i know hard right</i>).
          So you decide i will arrange all my clothes in a wardrobe categorically, if its shoes i will place them on the
          lower compartment. Coats will
          be neatly hanged on the rails, each sock will be tied closely with its' pair no more struggling every morning
          before going
          to work,to find where the other sock is. With this method of arranging your clothes it means that you can
          easily send your
          friend or family to get you your blue polo shirt from your room,
          without even giving them prior knowledge of where to find it exactly in the wardrobe. Since everything
          has been arranged neatly and in an orderly fashion


          <p class="mt-2  leading-relaxed text-justify">
            With <span class="font-bold">Scenario 1</span> in mind think of spaghetti code as those piles of clothes on
            the
            chair. This is code that has no clear architecture or organization whatsoever. It also doesn't follow any
            naming
            conventions when it comes
            to declaring variables or functions.
            To give more context there are certain naming conventions that are used by developers i.e
            camelCase,snake_case and PascalCase.
            Most of the time if not everytime when declaring a function in C#, you have to use PascalCase.So it varies
            with the
            programming language, in the case of JavaScript PascalCase is only used when naming constructors and
            classes. Spaghetti code does not
            follow such conventions.<br/>
            Spaghetti code is code that is poorly abstracted and poorly encapsulated. It is
            strongly interconnected. That means the various pieces of the code depend on each other in complex and
            probably illogical ways, so it is very hard to change a minor thing without breaking things elsewhere. Good
            code should be as simple as possible while still achieving the goal, and should be designed in a way that is
            easily maintainable and alterable. It should be possible to change some function without worrying too much
            about what goes on elsewhere, because as long as the same goal is achieved then other parts of the code
            shouldn't need to care about how.
          </p>
          <br>
          <p class="mt-2  leading-relaxed text-justify">
            Now with <span class="font-bold">Scenario 2</span> in mind think of the wardrobe as the design patterns.They
            help organize
            our code in a logical and and organized manner that any developer can understand.Such that if any new
            developer
            was to come in he can make changes to the codebase without much hassle. As you understand the fundamentals
            of programming also
            try to understand how design patterns work. I will use C# as an example since i have worked with the
            language for sometime.
            In most tutorials,codebases and even microsoft's official documentation there some implementation of DDD
            (Domain Driven Design) pattern.
            This is where your business logic is contained in class/POCO objects called entities. If i am to quote a
            book by
            <span class="italic font-light">Martin Fowler,Patterns of Enterprise Application Architecture,</span>, <span
            class="italic font-light">Domain-Driven Design is an
          approach to software development that centers the development on programming a domain model that has a rich understanding of the processes and
          rules of a domain</span>. This entities or so called domain models are usually further grouped into bounded
            contexts.
            I wont go so much into design patterns as you can see below they are several
          </p>
          <PatternsList/>

          <p class="mt-2 leading relaxed text-justify">
            Most frameworks actually use some of these patterns laravel,Vue,.NET core just to name a few. Laravel
            actually uses the structural facade pattern.
            Have pulled this directly from laravel official docs:</p>
          <div class="flex justify-center">
            <div class="italic max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
              Laravel facades serve as "static proxies" to underlying classes in the service container, providing the
              benefit of a terse, expressive syntax while maintaining more testability and flexibility than traditional
              static methods.</div>
          </div>

          Here are some title of books that can help you understand more about design patterns
          <div class="flex justify-center">
             <BooksList/>

          </div>


          <div class="font-semibold text-4xl mt-2 break-words">Conclusion</div>


          <p class="mt-2  leading-relaxed text-justify">
            So the next piece of the puzzle is to familiarize yourself with these patterns so that whenever you are
            starting a new personal
            project try to use them. They might look boring at first and start questioning yourself
            why do i need them as long as my code works. In the near future when you project starts growing and you keep
            on adding new functionalities
            these design patterns will help to not shoot yourself in the foot.
            Design patterns is what differentiates good code from bad code, a good developer from a bad one and an
            experienced developer from
            one who is just starting out.
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
  },

}
</script>

<style scoped>

</style>
