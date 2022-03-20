<template>
<div>
  <pre>
    <code v-highlight class="csharp">
        public static class ScheduleExtensionService
      {
        public static IServiceCollection AddCronJob&gt;T&lt;(this IServiceCollection services, Action&gt;IScheduleConfig&gt;T&lt;&lt; options) where T : CronJobService
        {
            if (options == null)
            {
                throw new ArgumentNullException(nameof(options), @"Please provide Schedule Configurations.");
            }
            var config = new ScheduleConfig&gt;T&lt;();
            options.Invoke(config);
            if (string.IsNullOrWhiteSpace(config.CronExpression))
            {
                throw new ArgumentNullException(nameof(ScheduleConfig&gt;T&lt;.CronExpression), @"Empty Cron Expression is not allowed.");
            }

            services.AddSingleton&gt;IScheduleConfig&gt;T&lt;&lt;(config);
            services.AddHostedService&gt;T&lt;();
            return services;
        }

    }
    </code>
  </pre>
  <p class="ml-5">
    The last step is we have this extension class that has a return type of <code>IServiceCollection</code>.
    Its the last missing piece to the puzzle.With this extension class, we can now bootstrap
    our custom cron jobs and hook it up with the service HostedServices that is part of .NET.
  </p>
</div>
</template>

<script>
export default {
  name: "ExtensionCronJob"
}
</script>

<style scoped>

</style>
