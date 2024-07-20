export interface Point {
    x: number;
    y: number;
  }

export const originalPoints: Point[] = [
    { x: 0.681, y: 0.255 },  // 1
    { x: 0.622, y: 0.146 }, // 2
    { x: 0.545, y: 0.085 }, // 3
    { x: 0.454, y: 0.085 }, // 4
    { x: 0.376, y: 0.14 }, // 5
    { x: 0.315, y: 0.242 }, // 6
    { x: 0.279, y: 0.376 },  // 7
    { x: 0.273, y: 0.522 },  // 8
    { x: 0.30, y: 0.664 }, // 9
    { x: 0.352, y: 0.78 }, // 10
    { x: 0.425, y: 0.85 }, // 11
    { x: 0.527, y: 0.865 }, // 12
    { x: 0.607, y: 0.818 }, // 13
    { x: 0.669, y: 0.723 }, // 14
    { x: 0.708, y: 0.59 },  // 15
    { x: 0.386, y: 0.234 }, // 16
    { x: 0.428, y: 0.21 },  // 17
    { x: 0.452, y: 0.21 },  // 18
    { x: 0.475, y: 0.21 },   // 19
    { x: 0.427, y: 0.33 }, // 20
    { x: 0.324, y: 0.49 },  // 21
    { x: 0.356, y: 0.448 }, // 22
    { x: 0.356, y: 0.485 }, // 23
    { x: 0.356, y: 0.52 }, // 24
    { x: 0.397, y: 0.448 }, // 25
    { x: 0.397, y: 0.485 }, // 26
    { x: 0.397, y: 0.52 }, // 27
    { x: 0.437, y: 0.448 }, // 28
    { x: 0.437, y: 0.485 }, // 29
    { x: 0.437, y: 0.52 }, // 30
    { x: 0.476, y: 0.448 }, // 31
    { x: 0.476, y: 0.485 }, // 32
    { x: 0.476, y: 0.52 }, // 33
    // { x: 0.343, y: 0.629 },  // 34
    { x: 0.397, y: 0.59 }, // 35
    { x: 0.397, y: 0.624 }, // 36
    { x: 0.397, y: 0.66 }, // 37
    { x: 0.437, y: 0.59 }, // 38
    { x: 0.437, y: 0.624 }, // 39
    { x: 0.437, y: 0.66 }, // 40
    { x: 0.476, y: 0.59 }, // 41
    { x: 0.476, y: 0.624 }, // 42
    { x: 0.476, y: 0.66 }, // 43
    { x: 0.399, y: 0.714 }, // 44
    // { x: 0.434, y: 0.77 },  // 45
    { x: 0.475, y: 0.778 },    // 46
    { x: 0.538, y: 0.436 }, // 47
    { x: 0.573, y: 0.436 },  // 48
    { x: 0.608, y: 0.436 },  // 49
    { x: 0.599, y: 0.534 }, // 50
    { x: 0.564, y: 0.55 },  // 51
    { x: 0.539, y: 0.594 }, // 52
    { x: 0.532, y: 0.656 }, // 53
    { x: 0.546, y: 0.716   }, // 54
    { x: 0.575, y: 0.75 }, // 55
    { x: 0.61, y: 0.754 }, // 56
    { x: 0.64, y: 0.721 }, // 57
    { x: 0.663, y: 0.688 }, // 58
    { x: 0.659, y: 0.627 }, // 59
    { x: 0.634, y: 0.578 }, // 60
  ];


  export interface Point {
    x: number;
    y: number;
  }

  export interface PointObject {
    x: number;
    y: number;
    width: number;
    height: number;
    rotation: number;
  }

  export const originalPointsObject: PointObject[] = [
    { x: 0.674, y: 0.273, width: 63, height: 34, rotation: 55 },  // 1
    { x: 0.613, y: 0.172, width: 62, height: 32, rotation: 33 }, // 2
    { x: 0.535, y: 0.118, width: 62, height: 32, rotation: 10 }, // 3
    { x: 0.444, y: 0.122, width: 62, height: 32, rotation: -14 },  // 4
    { x: 0.367, y: 0.182, width: 62, height: 32, rotation: -35 },   // 5
    { x: 0.309, y: 0.289, width: 62, height: 32, rotation: -57 },  // 6
    { x: 0.276, y: 0.426, width: 62, height: 32, rotation: 102 },  // 7
    { x: 0.274, y: 0.575, width: 62, height: 32, rotation: 81 },  // 8
    { x: 0.303, y: 0.714, width: 62, height: 32, rotation: 59 },   // 9
    { x: 0.359, y: 0.824, width: 62, height: 32, rotation: 38 },   // 10
    { x: 0.434, y: 0.89, width: 62, height: 32, rotation: 15 },   // 11
    { x: 0.536, y: 0.898, width: 62, height: 32, rotation: -10 },  // 12
    { x: 0.614, y: 0.843, width: 62, height: 32, rotation: -32 },  // 13
    { x: 0.675, y: 0.741, width: 62, height: 32, rotation: -54 },  // 14
    { x: 0.711, y: 0.607, width: 62, height: 32, rotation: -76 },   // 15
    { x: 0.38, y: 0.258, width: 40, height: 38, rotation: 0 },  // 16
    { x: 0.428, y: 0.24, width: 20, height: 60, rotation: 0 },   // 17
    { x: 0.452, y: 0.24, width: 20, height: 60, rotation: 0 },   // 18
    { x: 0.475, y: 0.24, width: 20, height: 60, rotation: 0 },   // 19
    { x: 0.427, y: 0.368, width: 165, height: 75, rotation: 0 },   // 20
    { x: 0.324, y: 0.513, width: 20, height: 85, rotation: 0 },   // 21
    { x: 0.356, y: 0.483, width: 30, height: 15, rotation: 0 },  // 22
    { x: 0.356, y: 0.52, width: 30, height: 15, rotation: 0 },  // 23
    { x: 0.356, y: 0.556, width: 30, height: 15, rotation: 0 },   // 24
    { x: 0.397, y: 0.483, width: 30, height: 15, rotation: 0 },  // 25
    { x: 0.397, y: 0.52, width: 30, height: 15, rotation: 0 },  // 26
    { x: 0.397, y: 0.556, width: 30, height: 15, rotation: 0 },   // 27
    { x: 0.437, y: 0.483, width: 30, height: 15, rotation: 0 },  // 28
    { x: 0.437, y: 0.52, width: 30, height: 15, rotation: 0 },  // 29
    { x: 0.437, y: 0.556, width: 30, height: 15, rotation: 0 },   // 30
    { x: 0.476, y: 0.556, width: 30, height: 15, rotation: 0 },  // 31
    { x: 0.476, y: 0.485, width: 30, height: 15, rotation: 0 },  // 32
    { x: 0.476, y: 0.52, width: 30, height: 15, rotation: 0 },   // 33

    { x: 0.397, y: 0.624, width: 30, height: 15, rotation: 0 },   // 35
    { x: 0.397, y: 0.66, width: 30, height: 15, rotation: 0 },  // 36
    { x: 0.397, y: 0.698, width: 30, height: 15, rotation: 0 },   // 37
    { x: 0.437, y: 0.624, width: 30, height: 15, rotation: 0 },   // 38
    { x: 0.437, y: 0.66, width: 30, height: 15, rotation: 0 },  // 39
    { x: 0.437, y: 0.698, width: 30, height: 15, rotation: 0 },   // 40
    { x: 0.476, y: 0.624, width: 30, height: 15, rotation: 0 },   // 41
    { x: 0.476, y: 0.66, width: 30, height: 15, rotation: 0 },  // 42
    { x: 0.476, y: 0.698, width: 30, height: 15, rotation: 0 },   // 43
    { x: 0.393, y: 0.756, width: 40, height: 40, rotation: 0 },  // 44
    { x: 0.475, y: 0.814, width: 36, height: 30, rotation: 0 },  // 46
    { x: 0.538, y: 0.474, width: 40, height: 30, rotation: 0 },  // 47
    { x: 0.573, y: 0.474, width: 40, height: 30, rotation: 0 },  // 48
    { x: 0.608, y: 0.474, width: 40, height: 30, rotation: 0 },  // 49
    { x: 0.599, y: 0.566, width: 20, height: 20, rotation: 3 },  // 50
    { x: 0.564, y: 0.58, width: 20, height: 20, rotation: -32 },   // 51
    { x: 0.539, y: 0.625, width: 20, height: 20, rotation: 28 },  // 52
    { x: 0.532, y: 0.69, width: 20, height: 20, rotation: -5 },  // 53
    { x: 0.546, y: 0.749, width: 20, height: 20, rotation: -40 },  // 54
    { x: 0.575, y: 0.783, width: 20, height: 20, rotation: 20 },   // 55
    { x: 0.61, y: 0.788, width: 20, height: 20, rotation: -15 },   // 56
    { x: 0.64, y: 0.754, width: 20, height: 20, rotation: -45 },   // 57
    { x: 0.657, y: 0.698, width: 20, height: 20, rotation: 10 },  // 58
    { x: 0.653, y: 0.637, width: 20, height: 20, rotation: -25 },  // 59
    { x: 0.629, y: 0.587, width: 20, height: 20, rotation: -57 },  // 60
  ];
  
