SOURCE CODE FOR THE HTML SKELETON

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Demo App</title>

    <!-- Bootstrap link  -->
    <link
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
    crossorigin="anonymous">

    Font-Awesome link
    <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

    <!-- CSS Link  -->
    <link rel="stylesheet" href="./css/style.css">

  </head>
  <body>

    <header>
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <!-- Instert the list here -->
            <ul>
              <li>Arturo</li>
              <li>Filio</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <section class="titles">
      <div class="container title-box">
        <div class="title-row">
          <div class="col-lg-4">
            <h3>Test</h3>
            <h3 class="title-headers">Web Design</h3>
          </div>
          <div class="col-lg-4">
            <h3>Test</h3>
            <h3 class="title-headers">Mobile Design</h3>
          </div>
          <div class="col-lg-4">
            <h3>Test</h3>
            <h3 class="title-headers">Infraestructure</h3>
          </div>
        </div>
      </div>
    </section>

    <section class="about-me">

      <div class="container">
        <h3 class="about-me-title">About Me</h3>
        <div class="">

        </div>
      </div>
    </section>

    <section class="carousel-section">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner">
          <div class="item active">
            <h3>Web Design <i class="fa fa-database" aria-hidden="true"></i></h3>
          </div>

          <div class="item">
            <h3>Mobile Design <i class="fa fa-database" aria-hidden="true"></i></h3>
          </div>

          <div class="item">
            <h3>Infraestructure <i class="fa fa-database" aria-hidden="true"></i></h3>

          </div>
        </div>

        <!-- Left and right controls -->
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>

    <script
      src="https://code.jquery.com/jquery-3.2.1.min.js"
      integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
      crossorigin="anonymous">
    </script>

    <!-- bootstrap cdn -->
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
      integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
      crossorigin="anonymous">
    </script>

    <!-- javascript file  -->
    <script type="text/javascript" src="./js/app.js"></script>

  </body>
</html>
