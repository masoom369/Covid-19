<?php

namespace App\Http\Controllers;

use App\Models\Vaccine;
use Illuminate\Http\Request;

class VaccineController extends Controller
{
    public function fetch()
    {
        $vaccines = Vaccine::all();
        return view('admin.vaccine-list', compact('vaccines'));
    }

    public function input(Request $request)
    {
        $request->validate([
            'vaccine_name' => 'required|string|max:255',
            'vaccine_availability' => 'required',
            'in:yes,no',
        ]);

        Vaccine::create([
            'vaccine_name' => $request->vaccine_name,
            'vaccine_availability' => $request->vaccine_availability
        ]);
        return redirect('admin/vaccine-list')->with('success', 'Vaccine added successfully.');
    }
    public function edit($id)
    {
        $vaccine = Vaccine::findOrFail($id);
        return view('admin.update-vaccine', compact('vaccine'));
    }

    // Handle the update logic
    public function update(Request $request, $id)
    {
        $request->validate([
            'vaccine_name' => 'required|string|max:255',
            'vaccine_availability' => 'required',
            'in:yes,no',
        ]);

        $vaccine = Vaccine::findOrFail($id);
        $vaccine->update([
            'vaccine_name' => $request->input('vaccine_name'),
            'vaccine_availability' => $request->input('vaccine_availability'),
        ]);
        return redirect('admin/vaccine-list')->with('success', 'Vaccine updated successfully.');
    }

    public function destroy($id)
    {
        $vaccine = Vaccine::findOrFail($id);
        $vaccine->delete();

        return redirect('admin/vaccine-list')->with('destroy', 'Vaccine deleted successfully.');
    }
}
