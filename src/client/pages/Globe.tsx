import { useEffect, useRef } from "react";
import { Viewer, Terrain, createOsmBuildingsAsync, Cesium3DTileset } from "cesium";
import { FaSearch } from "react-icons/fa";
import Button from "../components/Button";

const Globe = () => {
  const viewerRef = useRef<Viewer | null>(null);
  const cesiumContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!cesiumContainerRef.current) return;

    // Initialize Cesium Viewer
    viewerRef.current = new Viewer(cesiumContainerRef.current, {
      terrain: Terrain.fromWorldTerrain(),
    });

    // Add OSM 3D buildings
    createOsmBuildingsAsync()
      .then((osmBuildings) => viewerRef.current?.scene.primitives.add(osmBuildings))
      .catch(console.error);

    return () => {
      viewerRef.current?.destroy(); // Cleanup on unmount
    };
  }, []);

  const loadTileSet = async () => {
    try {
      const tileset = await Cesium3DTileset.fromUrl(
        "https://fieldsync-fullstack-twin.s3.amazonaws.com/Scene/Production_1cesium.json"
      );
      viewerRef.current?.scene.primitives.add(tileset);
      viewerRef.current?.flyTo(tileset);
    } catch (error) {
      console.error("Error loading tileset:", error);
    }
  };

  return (
    <div className='globe-container'>
      <span className='load-tileset-btn'>
        <Button text='View Tower' action={loadTileSet} />
        <FaSearch className='fa-icon-search' />
      </span>
      <div ref={cesiumContainerRef} className="cesium-viewer" />
    </div>
  );
};

export default Globe
