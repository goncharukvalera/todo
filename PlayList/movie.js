function Movie(title, year, duration) {
    this.year = year;
    Media.call(this, title, duration)
}
Movie.prototype = Object.create(Media.prototype)
Movie.prototype.constructor = Movie; 

Movie.prototype.html = function(){
    return `<div class="row py-3 ${this.isPlaying ? 'current': ''}">
    <div class="col-sm-9">${this.title} - ${this.year}</div>
    <div class="col-sm-3">${this.duration}</div>
</div>`
}