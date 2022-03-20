<template>
<div>
  <pre>
    <code v-highlight class="csharp">
        services.AddCronJob&gt;AssignTicketCronJob&lt;(c =>
            {
                c.TimeZoneInfo = TimeZoneInfo.Local;
                c.CronExpression = @"*/5 * * * *";
            });

    </code>
  </pre>
  <div class="ml-5">
    Now all we have to do is add this piece of code to our <code>Startup.cs</code> class and
    we would have made our first cron job. So as our application is starting this service will
    be added as part of the pipeline. It will be executed after every 5 minutes based on the
    cron expression. If we decided that we want our ticket assigment to take place every 30 mins all we have to
    do is change it to :
    <pre><code v-highlight class="csharp">
    services.AddCronJob&gt;AssignTicketCronJob&lt;(c =>
    {
    c.TimeZoneInfo = TimeZoneInfo.Local;
    c.CronExpression = @"*/30 * * * *";
    });
  </code>
  </pre>
  </div>
</div>
</template>

<script>
export default {
  name: "StartCronJob"
}
</script>

<style scoped>

</style>
