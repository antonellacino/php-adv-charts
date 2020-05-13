
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>php-adv-charts</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2/dist/Chart.min.js"></script>
    <script src="https://momentjs.com/downloads/moment-with-locales.min.js"></script>
</head>

<body>
  <h1>Fatturato</h1>
  <div class="containerLine">
    <canvas id="myChartLine"></canvas>
  </div>

  <h1>Fatturato by agent</h1>
  <div class="containerPie">
    <canvas id="myChartPie"></canvas>
  </div>

  <h1>Team Efficiency</h1>
  <div class="containerEfficiency">
    <canvas id="myChartEfficiency"></canvas>
  </div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="main.js"></script>
</body>

</html>
