<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NewReport extends Mailable
{
    use Queueable;
    use SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(
        public string $title,
        public string $email,
        public string $text
    ) {
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->subject('Hello!')
            ->view('emails.new_report');
    }
}

//Если private, то передаем в ассоциативном массиве параметры. Public - не нужно передавать
//[
//                'title' => $this->title,
//                'email' => $this->email,
//                'text' => $this->text,
//            ]
