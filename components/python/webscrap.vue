<template>
  <div>
    <HeaderNav/>
    <main class="max-w-6xl   mx-auto overflow-hidden  shadow-2xl bg-gray-50">
      <img alt="Article" class="object-cover w-full h-96" src="/important/scrap.jpg">

      <div class="p-6 text-black ">
        <div>
          <span class="text-xs font-bold text-blue-600 uppercase dark:text-blue-400">23 DECEMBER  2021</span>
          <br/>
          <span class="text-xs text-blue-600 uppercase dark:text-blue-400">6 MIN READ</span>

          <a class="block mt-2 text-5xl font-semibold" href="#">Price Tracker</a>
          <p class="mt-2 text-black leading-relaxed text-justify ">
            As we we enter the festive season everyone wants to be gifted a present. Businesses will use this
            opportunity to increase the prices on their commodities with absurd prices, some will
            decide to give you some really great offers but on limited stock. Its now a matter of picking
            your poison.You may want to buy that new stylish phone with a very good spec sheet,fast RAM,good
            camera,blazing fast processor
            but the price is still not within your budget.
            So you have to keep checking on the store's website,waiting for the price to drop so that
            you can buy it. At some point it gets boring and tiring, what if we find a way to automate this process? so
            that
            once the price drops you will be the first one to know and get an email notification.Lets dive in!


          </p>

          <div class="font-semibold text-3xl mt-2">Web Scraping</div>
          <p class="mt-2  leading-relaxed text-justify">
            Web scraping is an automatic method to obtain large amounts of data from websites. Most of this data is
            unstructured data in an HTML format which is then converted into structured data in a spreadsheet or a
            database so that it can be used in various applications.
            So for our use case we will be using this great <a class="text-blue-300 hover:text-blue-400"
                                                               href="https://www.phoneplacekenya.com">website</a>
            that sells phones and other accessories. Before we start scraping we first have to figure out what our
            requirements are. Just like writing
            any other program you <span class="font-extralight">" First,solve the problem,Then,write the code"</span>
          </p>

          <div class="font-semibold text-3xl mt-2">What we want to achieve</div>
          <div class="ml-5">
            <ol class="list-decimal">
              <li>Scrap the website and save all information including name and price.</li>
              <li>Do a comparison between the price displayed on the website and the one
                in our records.
              </li>
              <li>If the one displayed on the website and the one we have in record are not
                equal, then it means there is a price drop
              </li>
              <li>For every price drop we create a new record,ideally our script should
                run after every 24 hours.I wrote an article about cron jobs you can
                read it <a class="text-blue-300 hover:text-blue-400 cursor-pointer"
                           @click="$router.push('/blog/defining-cron-jobs-in-c-sharp')">here</a></li>

            </ol>

          </div>

          <div class="font-semibold text-3xl mt-2">Solution</div>
          <p class="mt-2  leading-relaxed text-justify">
            For our case we will do the task with python. We can do it with other languages, PHP has <a
            class="text-blue-300 hover:text-blue-400" href="https://roach-php.dev/docs/introduction" target="_blank">
            Roach PHP</a>,
            Node js has <a class="text-blue-300 hover:text-blue-400" href="https://cheerio.js.org/">Cheerio</a>.
            Basically all
            these programming languages have their own implementations. I chose python because based on a google search
            python performs better and faster and has a very good html parser.You are open to use any this was just my
            preference
            lets start!
          </p>
          <div class="font-bold mt-2">Requirements</div>
          <br>
          <div class="ml-5">
            <ol class="list-decimal">
              <li>We will need <a class="text-blue-300 hover:text-blue-400"
                                  href="https://www.djangoproject.com/">django</a>. A python web framework
                that uses the MVC architecture.This will help us save our data to our database everytime there is a
                price drop
              </li>
              <li><a class="text-blue-300 hover:text-blue-400"
                     href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/">Beautiful Soup</a>
                a python library that will parse our HTML files (webpage containing information we need)
              </li>
            </ol>
          </div>
          <div class="font-bold mt-2">Design Phase</div>
          <br>

          <div class="ml-5">
            <p>We need to come up with a concise and consistent way to save all the information we will be scraping.
              We will have four models <code>Category</code>,<code>SubCategory</code>,<code>Tracker</code> and <code>Website.</code>
            </p>
            <ul class="mt-2.5 list-disc">
              <li><code>Category</code>- Will hold the brand of our item,website id field to tell us in which
                website is this item from
                and link field to tell us the exact page the scraping should start from.
              </li>
              <pre>
                <code v-highlight class="python">
from django.db import models


class Categories(models.Model):
    idcategories = models.AutoField(primary_key=True)
    category_name = models.CharField(max_length=45)
    website_id = models.IntegerField(blank=True, null=True)
    link = models.JSONField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now=True,blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True,blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'categories'

                </code>
              </pre>
            </ul>
            <ul class="mt-2.5 list-disc">
              <li><code>Sub Category</code>- Will hold the category id which we can use to know from which category is
                our item ,
                is it a samsung product or an apple product? The name field, to tell us the actual name of the item if
                its a samsung product then
                which specific samsung product, Galaxy S22 or S20. Current price field to let us know what was the price
                of the item when the last webscraping task was done. Link field to let us know from which section of the
                website
                we can find that item.
              </li>
              <pre>
                <code v-highlight class="python">
from django.db import models


# Create your models here.
class SubCategory(models.Model):
    idsub_category = models.AutoField(primary_key=True)
    category_id = models.IntegerField(blank=True, null=True)
    name = models.CharField(max_length=155, blank=True, null=True)
    current_price = models.FloatField(blank=True, null=True)
    initial_price = models.FloatField(blank=True, null=True)
    link = models.CharField(max_length=245, blank=True, null=True)
    image = models.CharField(max_length=245, blank=True, null=True)
    created_at = models.DateTimeField(null=True,blank=True,auto_now_add=True)
    updated_at = models.DateTimeField(null=True,blank=True,auto_now_add=True)

    class Meta:
        managed = True
        db_table = 'sub_category'

                </code>
              </pre>
            </ul>
            <ul class="mt-2.5 list-disc">
              <li><code>Tracker</code>- Will act as our history record. Whenever there is a price drop this is where we
                will record that
                information. It has the subcategory_id field to tell us exactly which item is that dropped in price and
                whats the price of that
                item.
              </li>
              <pre>
                <code v-highlight class="python">
class Tracker(models.Model):
    idtracker = models.AutoField(primary_key=True)
    subcategory_id = models.IntegerField(blank=True, null=True)
    price = models.FloatField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now=True, blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'tracker'

                </code>
              </pre>
            </ul>
            <ul class="mt-2.5 list-disc">
              <li><code>Website</code>- Lastly here we would hold information of the websites we are scraping. So that
                in the future
                if we would want to scrap a new website, we will save the information here. It just has two fields the
                website name and id.
              </li>
              <pre>
                <code v-highlight class="python">
class Website(models.Model):
    idwebsite = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'website'

                </code>
              </pre>
            </ul>
          </div>
          <div class="font-bold mt-2">Design Phase</div>
          <p>Now that we have actualized the problem into models, its now time to write the code.</p><br><br>

          <p class="ml-5">
            Will first start by writing the scrapping logic. Before we do that we need to know the html structure of
            the webpage we are trying to scrap. The price of an item is stored in which <code>div</code> tag? Is it
            a <code>span</code> or an anchor tag. Such information we can do so by visiting the webpage and inspecting
            the DOM.
            In chrome you would open the dev tools CTRL+SHIFT+I in firefox you would use CTRL+SHIFT+C. Once you are able
            to identify in which html tags are the information we need stored, will let our html parser beautiful soup
            know
            about it. Forgot to mention we need to install the requests package. This is because we first have to make a
            HTTP
            request to the website we are looking to scrap and pass the content of the result to the html parser for it
            to do its magic. See
            the snippet below.
          </p>

          <pre>
            <code v-highlight class="python">
import requests
from bs4 import BeautifulSoup

class ScrapPhoneplace:
  fin = []

  def trackprice(self, link):
      res = requests.get(link)
      sp = BeautifulSoup(res.content, 'lxml')

      allphones = sp.find('ul', {"class": ["products", "columns-4", " columns__wide--5"]})
      phones = allphones.find_all("span", {"class": "gtm4wp_productdata"})

      for g in phones:
          data = {
              "name": g.attrs.get("data-gtm4wp_product_name"),
              "price": float(g.attrs.get("data-gtm4wp_product_price")),
              "link": g.attrs.get("data-gtm4wp_product_url"),


         }
          self.fin.append(data)

      return self.fin

            </code>
          </pre>
          <p class="ml-5">
            So a few things are happening here,first we are looping through all the phones returned by beautiful soup
            from the link
            we provided and creating a python dictionary and pushing it to the <code>fin</code> array.
            The key <code>"name"</code> contains the name of the phone,<code>"price"</code> contains the price of the
            phone and <code>"link"</code>
            contains where on the website that information got scrapped from.
          </p>

          <p class="mt-2.5">
            The next step is to retrieve the current price of items from the database before we perform another
            webscrap. This is
            how we will determine what has reduced in price and what hasn't. We are doing a query on our subcategory
            table
            with a select query where link contains the website we are scraping in this case 'phoneplacekenya' and
            retrieving the
            name and current price column.
          </p>

          <pre>
            <code v-highlight class="python">

def allPrices(self):
    return list(SubCategory.objects.filter(link__icontains='phoneplacekenya').values('name', 'current_price'))
            </code>
          </pre>

          <p> Last step is now to update the tracker table with items that have changed in price. This function will
            run conditionally as you will see later on. There's a lot happening in these function so will explain it in
            steps.
          </p>

          <pre>
            <code v-highlight class="python">
def update_db(self, name, price):
        ids = SubCategory.objects.filter(name=name).values_list('idsub_category', flat=True)
       # STEP1 retrieve the subcategory field based on the name filter which is passed as a parameter

        oldprice = Tracker.objects.filter(subcategory_id=ids[0])

       #STEP2 check if the tracker table has any record of such an item based on the subcategory id filter and save result
              #set to variable 'oldprice'

        if oldprice:#STEP 3 if oldprice is not Null or rather the item at one point had changed in price

            if oldprice.values('price').latest('created_at')['price'] !=

              #STEP 4 do a comparison of the price saved in the db with the one passed as a parameter, if its not the same then
              # the item has changed in price again so we have to save the new price again

                Tracker.objects.create(
                    subcategory_id=ids[0],
                    price=price
                )
              #STEP 5 Save record to DB
            else:
                print('web price is' + str(price) + 'and old price' + str(oldprice))
              #STEP 6 means price has reduced in price
        else:

              #STEP 7 Only runs if this is the first time that the item has dropped in price
            Tracker.objects.create(
                subcategory_id=ids[0],
                price=price
            )
            </code>
          </pre>
          <p>
            Lets now get into the heart of the code. Now that we have separated the logic into small modular pieces we can now
            re-use them.
          </p>

          <pre>
            <code v-highlight class="python">
def compare_phoneplace():
    dataset_phoneplace = Categories.objects.filter(website_id=2).values('link', 'idcategories')

    website_prices = []
    database_prices = ScrapPhoneplace().allPrices()

    for values in dataset_phoneplace:
        website_prices.append(ScrapPhoneplace().trackprice(values['link']['link']))

    for item_web in website_prices[0]:
        res_db = next((item_database for item_database in database_prices if item_database['name'] == item_web['name']),
                      False)

        if res_db:
            if res_db['current_price'] > item_web['price']:
                new_data_phoneplace().update_db(item_web['name'], item_web['price'])
        else:
            ids = Categories.objects.filter(category_name__icontains=item_web['name'].split()[0]).values('idcategories')
            ins = SubCategory(
                category_id=ids,
                name=item_web['name'],
                current_price=item_web['price'],
                link=item_web['link']

            )
            ins.save()

            </code>
          </pre>
          <p class="ml-5">
            We first start by retrieving all the items from our database i.e the link of the item and its idcategory save it to
            <code>dataset_phoneplace()</code>
            We then have to retrieve the items current prices and their names from the DB and save it to <code>database_prices</code>.
            The reason why we had to query our DB first was to get the URL's of each of our items and pass them to the <code>track_price()</code>
            as a parameter. If you go back to the previous code snippet i shared you can see this method expects one parameter.
            So for every record that we retrieved from our database call <code>track_price()</code> and push every result to
            the <code>website_prices</code> list.<br>
            Next, now that we have both database and website prices , we can start doing the comparison. For every item in
            our <code>website_prices</code> we do a check to see if the current price is greater than the newly updated website price, if
            it evaluates to true then it means, the price has dropped. So we call our <code>update_db</code> from earlier and insert
            that record to <code>tracker</code> table. <br>
            If by any chance <code>res_db</code> doesn't evaluate to true then it means that there is a new item that has been added to the
            website that we dont have in our records. So we add that new item to our database and thats it! Few lines of code we
            are now able to keep track of price drops on our items,beauty of python. Full source code
            can be found <a class="text-blue-300 hover:text-blue-400 cursor-pointer" href="https://github.com/melvin78/PriceTracker">here.</a>

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
  name: "webscrap"
}
</script>

<style scoped>

</style>
