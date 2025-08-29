<style>
    img {
        max-width: 75%;
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    #pdf-render {
        max-width: 100%;
        height: auto;
        border: 1px solid #ccc;
    }
    #pdf-controls button {
        padding: 5px 10px;
        margin: 0 5px;
        font-size: 12px;
    }
</style>

<div style="text-align: center;">
    <div id="pdf-controls" style="text-align: center; margin-bottom: 10px;">
        <button id="prev" onclick="prevPage()">←</button>
        <span>Page: <span id="page-num">1</span> / <span id="page-count">?</span></span>
        <button id="next" onclick="nextPage()">→</button>
    </div>
    <div id="loading" style="text-align: center;">Loading...</div>
    <div id="canvasContainer" style="text-align: center;">
        <canvas id="pdf-render" style="width: 85%; height: auto; border: 1px solid #ccc;"></canvas>
    </div>
</div>

<script src="pdf-reader.js"></script>