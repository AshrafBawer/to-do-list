
        var list = $('.main-list');
        $('.daily-add-form').submit(function(e){
            e.preventDefault();
            var title = $('.daily-add-form input.title').val();
            var detail= $('.daily-add-form input.detail').val();
            $.ajax({
                method: 'post',
                url: '/',
                data: {title: title, detail: detail}
            }).done(function(task){
                $('.daily-add-form input.title').val("");
                $('.daily-add-form input.detail').val("");
                $.ajax({
                    method: 'get',
                    url: '/daily-tasks'
                }).done(function(data){
                    list.html(data);
                });
            });
        });

        $.ajax({
            method: 'get',
            url: '/daily-tasks'
        }).done(function(data){
            list.html(data);
        });