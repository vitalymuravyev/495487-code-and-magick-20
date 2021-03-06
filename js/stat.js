'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_START_X = 100;
var CLOUD_START_Y = 10;

var COLUMN_MAX_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;

var GAP = 20;

function renderCloud(ctx2, x, y, color) {
  ctx2.fillStyle = color;
  ctx2.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

window.renderStatistics = function (ctx, players, results) {

  var PLAYERS_NUMBER = players.length;
  var HEIGHT_INDEX = COLUMN_MAX_HEIGHT / Math.max.apply(null, results);
  var HISTOGRAM_START_X = CLOUD_START_X + (CLOUD_WIDTH - (PLAYERS_NUMBER * COLUMN_WIDTH + (PLAYERS_NUMBER - 1) * COLUMN_GAP)) / 2;

  renderCloud(ctx, CLOUD_START_X + 10, CLOUD_START_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_START_X, CLOUD_START_Y, '#fff');

  ctx.fillStyle = 'black';
  ctx.textBaseline = 'hanging';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_START_X + GAP, CLOUD_START_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_START_X + GAP, CLOUD_START_Y + GAP * 2);

  for (var i = 0; i < PLAYERS_NUMBER; i++) {
    var x = HISTOGRAM_START_X + (COLUMN_GAP + COLUMN_WIDTH) * i;

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], x, CLOUD_START_Y + CLOUD_HEIGHT - GAP);

    ctx.fillStyle = (players[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + Math.random() * 100 + '%, 50%)';
    ctx.fillRect(x, CLOUD_START_Y + CLOUD_HEIGHT - 1.5 * GAP, COLUMN_WIDTH, -(HEIGHT_INDEX * results[i]));

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(results[i]), x, CLOUD_START_Y + CLOUD_HEIGHT - 2.5 * GAP - (HEIGHT_INDEX * results[i]));
  }
};

