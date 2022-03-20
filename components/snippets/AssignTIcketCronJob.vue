<template>
  <div>
  <pre>
    <code v-highlight class="csharp">
       public class AssignTicketCronJob : CronJobService
    {
        private readonly ILogger&gt;AssignTicketCronJob&lt; _logger;
        private readonly IServiceProvider _serviceProvider;

        public AssignTicketCronJob(IScheduleConfig&gt;AssignTicketCronJob&lt; config,
            ILogger&gt;AssignTicketCronJob&lt; logger,
            IServiceProvider serviceProvider)
            : base(config.CronExpression, config.TimeZoneInfo)
        {
            _logger = logger;
            _serviceProvider = serviceProvider;
        }

        public override  async Task DoWork(CancellationToken cancellationToken)
        {
            _logger.LogInformation($"{DateTime.Now:hh:mm:ss} Assing Ticket Cron Job is working.");

            using (var scope = _serviceProvider.CreateScope())
            {
                var assignTicketService = scope.ServiceProvider.GetRequiredService&gt;IAssignTicketService&lt;();
                assignTicketService.AssignRoundRobin(cancellationToken);
            }
        }
    }
    </code>
  </pre>
    <p class="ml-5">
      Here is our first cron job <code>AssignTicketCronJob</code>. In its constructor its also calling the constructor
      of the base class <code>CronJob</code>. The important bit here is the <code>config.CronExpression</code> and
      <code>config.TimezoneInfo</code>. We will pass a cron expression here to tell our hosted service after
      how long should we run this task. After 5 minutes the cron expression will be something similar
      to <code>@"*/5 * * * *"</code>. You can read more about cron expressions <a
      class="text-blue-300 hover:text-blue-400"
      href="https://docs.oracle.com/cd/E12058_01/doc/doc.1014/e12030/cron_expressions.htm">
      here.
    </a><br>
      The next step is we need to find a way in which we can access our auto-ticket assignment service. Dependency
      injection again to the rescue. .NET gives us the ability to call any services from anywhere within our
      app, as long as we registered that service when we bootstrapping our dependencies. Thus
      the line <code>scope.ServiceProvider.GetRequiredService&gt;IAssignTicketService&lt;();</code>.
      Remember we have to override the <code>DoWork()</code> method inherited from the abstract class
      <code>CronJob</code> for our background task to start executing
    </p>
  </div>
</template>

<script>
export default {
  name: "AssignTIcketCronJob"
}
</script>

<style scoped>

</style>
