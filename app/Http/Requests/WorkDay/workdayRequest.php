<?php

namespace App\Http\Requests\WorkDay;

use Illuminate\Foundation\Http\FormRequest;

class workdayRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'work_day' => ['required'],
            'year' => ['required'],
            'month' => ['required'],
        ];
    }

    public function messages(): array
    {
        return [
            'work_day.required' => 'work day is required.',
            'year.required' => 'year is required.',
            'year.integer' => 'year must be an integer.',
            'month.required' => 'month is required.',
        ];
    }
}
