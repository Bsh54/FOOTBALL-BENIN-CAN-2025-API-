const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Sample data from the provided table (corrected)
const playersData = [
  {
    id: 1,
    player: "Marcel Dandjinou",
    pos: "GK",
    age: 26,
    mp: 6,
    starts: 6,
    min: 540,
    nineties: 6.0,
    performance: {
      gis: 0,
      ast: 0,
      gA: 0,
      gPk: 0,
      pk: 0,
      pkatt: 2,
      crdY: 0,
      crdR: 0
    },
    per90Minutes: {
      gis: 0.00,
      ast: 0.00,
      gA: 0.00,
      gPk: 0.00,
      gAPk: 0.00
    }
  },
  {
    id: 2,
    player: "Steve Mounie",
    pos: "FW",
    age: 30,
    mp: 6,
    starts: 6,
    min: 640,
    nineties: 6.0,
    performance: {
      gis: 2,
      ast: 0,
      gA: 2,
      gPk: 2,
      pk: 0,
      pkatt: 2,
      crdY: 0,
      crdR: 0
    },
    per90Minutes: {
      gis: 0.33,
      ast: 0.00,
      gA: 0.33,
      gPk: 0.33,
      gAPk: 0.33
    }
  },
  {
    id: 3,
    player: "Imourane Hassane",
    pos: "MF",
    age: 21,
    mp: 6,
    starts: 6,
    min: 539,
    nineties: 6.0,
    performance: {
      gis: 1,
      ast: 1,
      gA: 2,
      gPk: 1,
      pk: 0,
      pkatt: 0,
      crdY: 1,
      crdR: 0
    },
    per90Minutes: {
      gis: 0.17,
      ast: 0.17,
      gA: 0.33,
      gPk: 0.17,
      gAPk: 0.33
    }
  },
  {
    id: 4,
    player: "Dodo Dokou",
    pos: "MF",
    age: 20,
    mp: 6,
    starts: 6,
    min: 530,
    nineties: 5.9,
    performance: {
      gis: 0,
      ast: 0,
      gA: 0,
      gPk: 0,
      pk: 0,
      pkatt: 0,
      crdY: 0,
      crdR: 0
    },
    per90Minutes: {
      gis: 0.00,
      ast: 0.00,
      gA: 0.00,
      gPk: 0.00,
      gAPk: 0.00
    }
  },
  {
    id: 5,
    player: "Junior Olaitan",
    pos: "MF",
    age: 22,
    mp: 6,
    starts: 6,
    min: 508,
    nineties: 5.6,
    performance: {
      gis: 1,
      ast: 2,
      gA: 3,
      gPk: 0,
      pk: 1,
      pkatt: 1,
      crdY: 2,
      crdR: 0
    },
    per90Minutes: {
      gis: 0.18,
      ast: 0.35,
      gA: 0.53,
      gPk: 0.00,
      gAPk: 0.00
    }
  },
  {
    id: 6,
    player: "Sessi D'Almeida",
    pos: "MF",
    age: 29,
    mp: 6,
    starts: 6,
    min: 473,
    nineties: 5.3,
    performance: {
      gis: 0,
      ast: 0,
      gA: 0,
      gPk: 0,
      pk: 0,
      pkatt: 0,
      crdY: 1,
      crdR: 0
    },
    per90Minutes: {
      gis: 0.00,
      ast: 0.00,
      gA: 0.00,
      gPk: 0.00,
      gAPk: 0.00
    }
  },
  {
    id: 7,
    player: "Rachid Moumini",
    pos: "DF",
    age: 20,
    mp: 5,
    starts: 5,
    min: 450,
    nineties: 5.0,
    performance: {
      gis: 0,
      ast: 1,
      gA: 1,
      gPk: 0,
      pk: 0,
      pkatt: 0,
      crdY: 0,
      crdR: 0
    },
    per90Minutes: {
      gis: 0.00,
      ast: 0.20,
      gA: 0.20,
      gPk: 0.00,
      gAPk: 0.00
    }
  },
  {
    id: 8,
    player: "Yohan Roche",
    pos: "DF",
    age: 27,
    mp: 5,
    starts: 5,
    min: 450,
    nineties: 5.0,
    performance: {
      gis: 0,
      ast: 0,
      gA: 0,
      gPk: 0,
      pk: 0,
      pkatt: 0,
      crdY: 0,
      crdR: 0
    },
    per90Minutes: {
      gis: 0.00,
      ast: 0.00,
      gA: 0.00,
      gPk: 0.00,
      gAPk: 0.00
    }
  },
  {
    id: 9,
    player: "Mohamed Tijani",
    pos: "DF",
    age: 27,
    mp: 4,
    starts: 4,
    min: 360,
    nineties: 4.0,
    performance: {
      gis: 1,
      ast: 0,
      gA: 1,
      gPk: 1,
      pk: 0,
      pkatt: 0,
      crdY: 0,
      crdR: 0
    },
    per90Minutes: {
      gis: 0.25,
      ast: 0.00,
      gA: 0.25,
      gPk: 0.25,
      gAPk: 0.25
    }
  },
  {
    id: 10,
    player: "Olivier Verdon",
    pos: "DF",
    age: 29,
    mp: 4,
    starts: 3,
    min: 286,
    nineties: 3.2,
    performance: {
      gis: 0,
      ast: 0,
      gA: 0,
      gPk: 0,
      pk: 0,
      pkatt: 0,
      crdY: 0,
      crdR: 0
    },
    per90Minutes: {
      gis: 0.00,
      ast: 0.00,
      gA: 0.00,
      gPk: 0.00,
      gAPk: 0.00
    }
  },
  {
    id: 11,
    player: "Cédric Hountondji",
    pos: "DF",
    age: 31,
    mp: 3,
    starts: 3,
    min: 270,
    nineties: 3.0,
    performance: {
      gis: 0,
      ast: 0,
      gA: 0,
      gPk: 0,
      pk: 0,
      pkatt: 0,
      crdY: 0,
      crdR: 0
    },
    per90Minutes: {
      gis: 0.00,
      ast: 0.00,
      gA: 0.00,
      gPk: 0.00,
      gAPk: 0.00
    }
  },
  {
    id: 12,
    player: "Tosin Aiyegun",
    pos: "MF",
    age: 26,
    mp: 4,
    starts: 3,
    min: 262,
    nineties: 2.9,
    performance: {
      gis: 0,
      ast: 0,
      gA: 0,
      gPk: 0,
      pk: 0,
      pkatt: 0,
      crdY: 0,
      crdR: 0
    },
    per90Minutes: {
      gis: 0.00,
      ast: 0.00,
      gA: 0.00,
      gPk: 0.00,
      gAPk: 0.00
    }
  },
  {
    id: 13,
    player: "David Kiki",
    pos: "DF",
    age: 31,
    mp: 2,
    starts: 2,
    min: 180,
    nineties: 2.0,
    performance: {
      gis: 0,
      ast: 0,
      gA: 0,
      gPk: 0,
      pk: 0,
      pkatt: 0,
      crdY: 0,
      crdR: 0
    },
    per90Minutes: {
      gis: 0.00,
      ast: 0.00,
      gA: 0.00,
      gPk: 0.00,
      gAPk: 0.00
    }
  },
  {
    id: 14,
    player: "Tamimou Ouarou",
    pos: "DF",
    age: 21,
    mp: 2,
    starts: 2,
    min: 180,
    nineties: 2.0,
    performance: {
      gis: 0,
      ast: 0,
      gA: 0,
      gPk: 0,
      pk: 0,
      pkatt: 0,
      crdY: 0,
      crdR: 0
    },
    per90Minutes: {
      gis: 0.00,
      ast: 0.00,
      gA: 0.00,
      gPk: 0.00,
      gAPk: 0.00
    }
  },
  {
    id: 15,
    player: "Jodel Dossou",
    pos: "MF",
    age: 32,
    mp: 4,
    starts: 2,
    min: 179,
    nineties: 2.0,
    performance: {
      gis: 0,
      ast: 1,
      gA: 1,
      gPk: 0,
      pk: 0,
      pkatt: 0,
      crdY: 0,
      crdR: 0
    },
    per90Minutes: {
      gis: 0.00,
      ast: 0.50,
      gA: 0.50,
      gPk: 0.00,
      gAPk: 0.00
    }
  },
  {
    id: 16,
    player: "Andreas Hountondji",
    pos: "MF",
    age: 22,
    mp: 5,
    starts: 1,
    min: 135,
    nineties: 1.5,
    performance: {
      gis: 2,
      ast: 0,
      gA: 2,
      gPk: 2,
      pk: 0,
      pkatt: 0,
      crdY: 0,
      crdR: 0
    },
    per90Minutes: {
      gis: 1.33,
      ast: 0.00,
      gA: 1.33,
      gPk: 1.33,
      gAPk: 1.33
    }
  },
  {
    id: 17,
    player: "Moise Adilehou",
    pos: "DF",
    age: 29,
    mp: 1,
    starts: 0,
    min: 16,
    nineties: 0.2,
    performance: {
      gis: 0,
      ast: 0,
      gA: 0,
      gPk: 0,
      pk: 0,
      pkatt: 0,
      crdY: 0,
      crdR: 0
    },
    per90Minutes: {
      gis: 0.00,
      ast: 0.00,
      gA: 0.00,
      gPk: 0.00,
      gAPk: 0.00
    }
  },
  {
    id: 18,
    player: "Steve Traore",
    pos: "FW",
    age: 26,
    mp: 1,
    starts: 0,
    min: 11,
    nineties: 0.1,
    performance: {
      gis: 0,
      ast: 0,
      gA: 0,
      gPk: 0,
      pk: 0,
      pkatt: 0,
      crdY: 0,
      crdR: 0
    },
    per90Minutes: {
      gis: 0.00,
      ast: 0.00,
      gA: 0.00,
      gPk: 0.00,
      gAPk: 0.00
    }
  },
  {
    id: 19,
    player: "Ghislain Ahoudo",
    pos: "MF",
    age: 25,
    mp: 2,
    starts: 0,
    min: 10,
    nineties: 0.1,
    performance: {
      gis: 0,
      ast: 0,
      gA: 0,
      gPk: 0,
      pk: 0,
      pkatt: 0,
      crdY: 0,
      crdR: 0
    },
    per90Minutes: {
      gis: 0.00,
      ast: 0.00,
      gA: 0.00,
      gPk: 0.00,
      gAPk: 0.00
    }
  },
  {
    id: 20,
    player: "Romaric Amoussou",
    pos: "MF",
    age: 24,
    mp: 1,
    starts: 0,
    min: 10,
    nineties: 0.1,
    performance: {
      gis: 0,
      ast: 0,
      gA: 0,
      gPk: 0,
      pk: 0,
      pkatt: 0,
      crdY: 0,
      crdR: 0
    },
    per90Minutes: {
      gis: 0.00,
      ast: 0.00,
      gA: 0.00,
      gPk: 0.00,
      gAPk: 0.00
    }
  },
  {
    id: 21,
    player: "Mariano Akouangbo",
    pos: "MF",
    age: 22,
    mp: 1,
    starts: 0,
    min: 0,
    nineties: 0.0,
    performance: {
      gis: 0,
      ast: 0,
      gA: 0,
      gPk: 0,
      pk: 0,
      pkatt: 0,
      crdY: 0,
      crdR: 0
    },
    per90Minutes: {
      gis: 0.00,
      ast: 0.00,
      gA: 0.00,
      gPk: 0.00,
      gAPk: 0.00
    }
  },
  {
    id: 22,
    player: "Mattéo Ahlinvi",
    pos: "MF",
    age: 25,
    mp: 2,
    starts: 0,
    min: 0,
    nineties: 0.0,
    performance: {
      gis: 0,
      ast: 0,
      gA: 0,
      gPk: 0,
      pk: 0,
      pkatt: 0,
      crdY: 0,
      crdR: 0
    },
    per90Minutes: {
      gis: 0.00,
      ast: 0.00,
      gA: 0.00,
      gPk: 0.00,
      gAPk: 0.00
    }
  },
  {
    id: 23,
    player: "Ryan Aïdogo",
    pos: "FW",
    age: 23,
    mp: 0,
    starts: 0,
    min: 0,
    nineties: 0.0,
    performance: {
      gis: 0,
      ast: 0,
      gA: 0,
      gPk: 0,
      pk: 0,
      pkatt: 0,
      crdY: 0,
      crdR: 0
    },
    per90Minutes: {
      gis: 0.00,
      ast: 0.00,
      gA: 0.00,
      gPk: 0.00,
      gAPk: 0.00
    }
  },
  {
    id: 24,
    player: "Saturnin Allagbe",
    pos: "GK",
    age: 31,
    mp: 0,
    starts: 0,
    min: 0,
    nineties: 0.0,
    performance: {
      gis: 0,
      ast: 0,
      gA: 0,
      gPk: 0,
      pk: 0,
      pkatt: 0,
      crdY: 0,
      crdR: 0
    },
    per90Minutes: {
      gis: 0.00,
      ast: 0.00,
      gA: 0.00,
      gPk: 0.00,
      gAPk: 0.00
    }
  }
];

// Validation des données au démarrage
function validatePlayerData() {
  const errors = [];
  
  playersData.forEach((player, index) => {
    // Validation des types de base
    if (typeof player.id !== 'number') errors.push(`Player ${index}: id must be number`);
    if (typeof player.player !== 'string') errors.push(`Player ${index}: player must be string`);
    if (!['GK', 'DF', 'MF', 'FW'].includes(player.pos)) errors.push(`Player ${index}: invalid position`);
    if (typeof player.age !== 'number') errors.push(`Player ${index}: age must be number`);
    if (typeof player.min !== 'number') errors.push(`Player ${index}: min must be number`);
    
    // Validation de la cohérence des données
    if (player.min > 0 && player.nineties === 0) {
      errors.push(`Player ${index}: nineties should not be 0 when min > 0`);
    }
    
    if (player.starts > player.mp) {
      errors.push(`Player ${index}: starts cannot be greater than matches played`);
    }
  });
  
  if (errors.length > 0) {
    console.warn('Data validation warnings:', errors);
  }
}

// Routes

// GET all players avec pagination et filtres
app.get('/api/players', (req, res) => {
  try {
    const { page = 1, limit = 20, sortBy = 'id', order = 'asc' } = req.query;
    
    // Copie des données pour tri
    let filteredPlayers = [...playersData];
    
    // Tri
    filteredPlayers.sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];
      
      if (order === 'desc') {
        return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
      }
      return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
    });
    
    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    const paginatedPlayers = filteredPlayers.slice(startIndex, endIndex);
    
    res.json({
      success: true,
      count: paginatedPlayers.length,
      total: playersData.length,
      page: parseInt(page),
      totalPages: Math.ceil(playersData.length / limit),
      data: paginatedPlayers
    });
  } catch (error) {
    console.error('Error in GET /api/players:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// GET player by ID
app.get('/api/players/:id', (req, res) => {
  try {
    const playerId = parseInt(req.params.id);
    
    if (isNaN(playerId)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid player ID'
      });
    }
    
    const player = playersData.find(p => p.id === playerId);
    
    if (!player) {
      return res.status(404).json({
        success: false,
        message: 'Player not found'
      });
    }
    
    res.json({
      success: true,
      data: player
    });
  } catch (error) {
    console.error('Error in GET /api/players/:id:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// GET players by position
app.get('/api/players/position/:pos', (req, res) => {
  try {
    const position = req.params.pos.toUpperCase();
    const validPositions = ['GK', 'DF', 'MF', 'FW'];
    
    if (!validPositions.includes(position)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid position. Use: GK, DF, MF, FW'
      });
    }
    
    const filteredPlayers = playersData.filter(p => p.pos === position);
    
    res.json({
      success: true,
      count: filteredPlayers.length,
      position: position,
      data: filteredPlayers
    });
  } catch (error) {
    console.error('Error in GET /api/players/position/:pos:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// GET players with minimum minutes played
app.get('/api/players/minutes/:min', (req, res) => {
  try {
    const minMinutes = parseInt(req.params.min);
    
    if (isNaN(minMinutes) || minMinutes < 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid minutes value'
      });
    }
    
    const filteredPlayers = playersData.filter(p => p.min >= minMinutes);
    
    res.json({
      success: true,
      count: filteredPlayers.length,
      minMinutes: minMinutes,
      data: filteredPlayers
    });
  } catch (error) {
    console.error('Error in GET /api/players/minutes/:min:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// GET players statistics summary
app.get('/api/stats/summary', (req, res) => {
  try {
    const totalPlayers = playersData.length;
    const totalGoals = playersData.reduce((sum, player) => sum + player.performance.gis, 0);
    const totalAssists = playersData.reduce((sum, player) => sum + player.performance.ast, 0);
    const totalMatches = playersData.reduce((sum, player) => sum + player.mp, 0);
    const totalMinutes = playersData.reduce((sum, player) => sum + player.min, 0);
    
    // Group by position
    const positions = {};
    playersData.forEach(player => {
      if (!positions[player.pos]) {
        positions[player.pos] = 0;
      }
      positions[player.pos]++;
    });
    
    // Average age
    const averageAge = playersData.reduce((sum, player) => sum + player.age, 0) / totalPlayers;
    
    // Additional stats
    const activePlayers = playersData.filter(p => p.min > 0).length;
    const topScorer = playersData.reduce((top, player) => 
      player.performance.gis > top.performance.gis ? player : top
    );
    
    res.json({
      success: true,
      data: {
        totalPlayers,
        activePlayers,
        totalGoals,
        totalAssists,
        totalMatches,
        totalMinutes,
        averageAge: parseFloat(averageAge.toFixed(1)),
        positions,
        topScorer: {
          player: topScorer.player,
          goals: topScorer.performance.gis
        }
      }
    });
  } catch (error) {
    console.error('Error in GET /api/stats/summary:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// GET top performers
app.get('/api/stats/top/:stat', (req, res) => {
  try {
    const stat = req.params.stat.toLowerCase();
    const validStats = ['goals', 'assists', 'minutes', 'matches', 'starts', 'age'];
    const { limit = 5 } = req.query;
    
    if (!validStats.includes(stat)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid stat. Use: goals, assists, minutes, matches, starts, age'
      });
    }
    
    let sortedPlayers;
    
    switch(stat) {
      case 'goals':
        sortedPlayers = [...playersData].sort((a, b) => b.performance.gis - a.performance.gis);
        break;
      case 'assists':
        sortedPlayers = [...playersData].sort((a, b) => b.performance.ast - a.performance.ast);
        break;
      case 'minutes':
        sortedPlayers = [...playersData].sort((a, b) => b.min - a.min);
        break;
      case 'matches':
        sortedPlayers = [...playersData].sort((a, b) => b.mp - a.mp);
        break;
      case 'starts':
        sortedPlayers = [...playersData].sort((a, b) => b.starts - a.starts);
        break;
      case 'age':
        sortedPlayers = [...playersData].sort((a, b) => b.age - a.age);
        break;
      default:
        sortedPlayers = [...playersData];
    }
    
    const topLimit = Math.min(parseInt(limit), sortedPlayers.length);
    
    res.json({
      success: true,
      stat: stat,
      limit: topLimit,
      data: sortedPlayers.slice(0, topLimit)
    });
  } catch (error) {
    console.error('Error in GET /api/stats/top/:stat:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Search players by name
app.get('/api/players/search/:name', (req, res) => {
  try {
    const searchTerm = req.params.name.toLowerCase();
    
    if (searchTerm.length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Search term must be at least 2 characters long'
      });
    }
    
    const filteredPlayers = playersData.filter(p => 
      p.player.toLowerCase().includes(searchTerm)
    );
    
    res.json({
      success: true,
      count: filteredPlayers.length,
      searchTerm: searchTerm,
      data: filteredPlayers
    });
  } catch (error) {
    console.error('Error in GET /api/players/search/:name:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// GET team overview
app.get('/api/team/overview', (req, res) => {
  try {
    const playersWithGoals = playersData.filter(p => p.performance.gis > 0);
    const playersWithAssists = playersData.filter(p => p.performance.ast > 0);
    const playersWithCards = playersData.filter(p => p.performance.crdY > 0 || p.performance.crdR > 0);
    
    // Calculate additional metrics
    const totalGoals = playersData.reduce((sum, p) => sum + p.performance.gis, 0);
    const totalAssists = playersData.reduce((sum, p) => sum + p.performance.ast, 0);
    
    res.json({
      success: true,
      data: {
        totalPlayers: playersData.length,
        playersWithGoals: playersWithGoals.length,
        playersWithAssists: playersWithAssists.length,
        playersWithCards: playersWithCards.length,
        totalGoals,
        totalAssists,
        goalsPerGame: totalMatches > 0 ? (totalGoals / totalMatches).toFixed(2) : 0,
        goalScorers: playersWithGoals.map(p => ({
          id: p.id,
          player: p.player,
          goals: p.performance.gis,
          position: p.pos
        })),
        assistLeaders: playersWithAssists.map(p => ({
          id: p.id,
          player: p.player,
          assists: p.performance.ast,
          position: p.pos
        }))
      }
    });
  } catch (error) {
    console.error('Error in GET /api/team/overview:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Benin Stats API - Africa Cup of Nations 2025 Qualification',
    version: '1.0.0',
    documentation: 'Visit /api/players for players data',
    endpoints: {
      players: '/api/players',
      playerById: '/api/players/:id',
      playersByPosition: '/api/players/position/:pos',
      playersByMinutes: '/api/players/minutes/:min',
      searchPlayers: '/api/players/search/:name',
      statsSummary: '/api/stats/summary',
      topPerformers: '/api/stats/top/:stat',
      teamOverview: '/api/team/overview',
      health: '/health'
    }
  });
});

// Error handling middleware
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    suggestedEndpoints: [
      '/api/players',
      '/api/stats/summary',
      '/api/team/overview'
    ]
  });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// Validation des données au démarrage
validatePlayerData();

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Benin Stats API running on port ${PORT}`);
  console.log(`📍 API available at: http://localhost:${PORT}`);
  console.log(`👥 Total players in database: ${playersData.length}`);
  console.log(`✅ Data validation completed`);
});

module.exports = app;