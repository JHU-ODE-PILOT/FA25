<style>
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
        <button id="prev">←</button>
        <span>Page: <span id="page-num">1</span> / <span id="page-count">?</span></span>
        <button id="next">→</button>
    </div>
    <div id="loading" style="text-align: center;">Loading...</div>
    <div id="canvasContainer" style="text-align: center;">
        <canvas id="pdf-render" style="width: 85%; height: auto; border: 1px solid #ccc;"></canvas>
    </div>
    <div id="ddl" style="text-align:right">
        <button id="download">Download</button>
    </div>
</div>

<div id="result-modal">
    <div id="result-box" style="text-align: center;">
        <div id="result-text">Password required for opening this file.</div>
        <br>
        <input id="usrPassword" type="password" placeholder="Enter your password...">
        <br><br>
        <button id="enter">enter</button>
    </div>
</div>

<script src="pdf-reader.js"></script>