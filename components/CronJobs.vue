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
            demo <a class="text-blue-300 hover:text-blue-400" href="">here.</a>
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



          <div class="font-semibold text-4xl mt-2">The Solution</div>

          I will share the entity classes that we will be dealing with i.e Ticket and Agents.In logical terms a ticket
          belongs to an agent and an agent can have many tickets assigned to him.<br><br>


          <SnippetOne/>

          <FactorySnippet/>

          <SpecficationPattern/>

          <AgentEntity/>


          <span class="font-bold">Solving problem 1</span>

          <p class="mt-2 text-black leading-relaxed text-justify ">
            Lets now dive into the code that will be executing in the background
            at set intervals,now that we have an idea of how the entity class looks like.<br>
            We need to find a way to assign the tickets within the shortest time possible. To also ensure fair
            distribution of tickets we use tokens. Whichever agent will be having the token, the ticket assignment
            will start from him and move sequentially to the next agent until all tickets have been assigned. <br>
            The agent to be assigned the last ticket is, the one who will receive the token. So that when the next batch
            of tickets
            come in we wont start from the first agent but whoever has the token, and how will we know who has the
            token,
            when fetching the list of agents from the data source we will order by <code>TokenAssignmentDate</code> in
            descending order.<br><br>
            So the code responsible of achieving this task should do the following: <br><br>
            <span class="ml-5 mt-5 ">1. Fetch all the tickets that have a status of "New" or rather ones
            that dont have an agent assigned yet.</span><br>
            <span class="ml-5 ">2. Based on the count of these tickets, do a for loop and assign tickets to agent
              by updating the column <code>CareTaker</code> with the agents unique identity <code>AgentId</code>.<br>
            </span>
            <span class="ml-5 ">3.In the last iteration of the for loop ,assign the last agent with a token
              by updating the <code>HasToken</code> column to true and <code>TokenAssignment</code> to <code>DateTime.Now</code>
            </span><br>
            <span class="ml-5 ">4. Send an email to notify the agent that he has been assigned a ticket.
            </span>


          </p><br><br>

          <p>
            Lets start,Now we have to create an Interface called <code>IAssignTicketService</code>. It will define
            methods that our class should implement. Again am just sharing part of the code snippets and not the whole
            solution. Full source code can be found <a class="text-blue-300 hover:text-blue-400">here</a>

          </p>
          <span class="font-bold ml-5">Requirements</span>
          <p class="leading-relaxed justify-center">

            Will add two nuget packages to our solution. The first one being <a
            class="text-blue-300 hover:text-blue-400" href="https://github.com/HangfireIO/Cronos">Cronos</a>.
            This package provides a very simple API that we can use to define cron expressions. Basically it
            will act as our clock and it will run our background task after defined time intervals.
            The second is <a class="text-blue-300 hover:text-blue-400" href="https://github.com/alicommit-malp/roundrobin">Round Robin</a>.
            This package will help us convert our list of agents to a linked list data structure,so that when assigning and
            re-assigning we can easily identify who is the first and who is the last agent. It also has extension methods
            like <code>Next()</code> and <code>First()</code> more on that later.
          </p>

          <span class="font-bold text-2xl">Lets Start</span>

          <AssignTicketService/>

          <AssignTicketServiceClasss/>

          <IntializeConstructor/>

          <RoundRobin/>
          <p class="mt-2 text-black leading-relaxed text-justify ">
          Now that we have encapsulated the ticket auto assignment logic into one method <code>AssignRoundRobin()</code>
            its now time to make it execute after a defined time intervals in this case after every 5 minutes.
          </p>

          <CronJobAbstract/>

          <AssignTIcketCronJob/>

          <ExtensionCronJob/>

          <StartCronJob/>
          <div class="font-semibold text-4xl mt-2 mb-2">Conclusion</div>
          <p class="mb-5">
           This is just an overview of how we can configure background tasks with .net. In a real live environment
            we would use service brokers like RabbitMQ or redis. Full source code can be found
            <a class="text-blue-300 hover:text-blue-400">here</a>

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
import FactorySnippet from "~/components/snippets/FactorySnippet";
import SpecficationPattern from "~/components/snippets/SpecficationPattern";
import AgentEntity from "~/components/snippets/AgentEntity";
import AssignTicketService from "@/components/snippets/AssignTicketService";
import AssignTicketServiceClasss from "@/components/snippets/AssignTicketServiceClasss";
import IntializeConstructor from "@/components/snippets/IntializeConstructor";
import RoundRobin from "@/components/snippets/RoundRobin";
import CronJobAbstract from "@/components/snippets/CronJobAbstract";
import AssignTIcketCronJob from "@/components/snippets/AssignTIcketCronJob";
import ExtensionCronJob from "@/components/snippets/ExtensionCronJob";
import StartCronJob from "@/components/snippets/StartCronJob";

export default {
  name: "CronJobs",
  components: {
    StartCronJob,
    ExtensionCronJob,
    AssignTIcketCronJob,
    CronJobAbstract,
    IntializeConstructor,
    AssignTicketServiceClasss,
    AssignTicketService, AgentEntity, SpecficationPattern, FactorySnippet, SnippetOne,RoundRobin}
}
</script>

<style scoped>

</style>
