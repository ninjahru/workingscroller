// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`3200080000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000050101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104010105000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000501010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101040101050000020000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000005010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010401010503000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000050101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104010105`, img`
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
`, [myTiles.transparency16,sprites.vehicle.roadHorizontal,sprites.dungeon.hazardLava1,myTiles.tile3,myTiles.tile4,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
